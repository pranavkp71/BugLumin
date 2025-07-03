from flask import Blueprint, jsonify, request, abort
from .models import db, DebugSnapshot, User
from sqlalchemy import cast, String
import uuid
from flask_jwt_extended import create_access_token

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return jsonify({"message": "Buglumin backend running"})

@main.route('/snapshots/', methods=['POST'])
def create_snapshot():
    data = request.get_json()

    code = data.get('code')
    logs = data.get('logs')
    env_metadata = data.get('metadata')

    if not code:
        return jsonify({"error": "Code field is required."}), 400
    
    snapshot = DebugSnapshot(
        code = code,
        logs = logs,
        env_metadata = env_metadata
    )

    db.session.add(snapshot)
    db.session.commit()

    return jsonify({
        "message": "Snapshot created successfully.",
        "snapshot_id": snapshot.id
    }), 201

@main.route('/snapshots/<snapshot_id>', methods=['GET'])
def get_snapshot(snapshot_id):
    snapshot = DebugSnapshot.query.filter_by(id=snapshot_id).first()

    if not snapshot:
        abort(404, description="Snapshot not found")

    return jsonify({
        "id": snapshot.id,
        "code": snapshot.code,
        "logs": snapshot.logs,
        "env_metadata": snapshot.env_metadata,
        "created_at": snapshot.created_at.isoformat()
    }), 200

@main.route('/snapshots/', methods=['GET'])
def list_snapshots():
    query = DebugSnapshot.query

    os_filter = request.args.get('os')
    python_filter = request.args.get('python')
    error_filter = request.args.get('error')

    if os_filter:
        query = query.filter(
            cast(DebugSnapshot.env_metadata, String).ilike(f'%\"os\": \"{os_filter}\"%')
        )
    if python_filter:
        query = query.filter(
            cast(DebugSnapshot.env_metadata, String).ilike(f'%\"python\": \"{python_filter}\"%') |
            cast(DebugSnapshot.env_metadata, String).ilike(f'%\"python_version\": \"{python_filter}\"%')
        )
    if error_filter:
        query = query.filter(cast(DebugSnapshot.logs, String).ilike(f"%{error_filter}%"))

    results = query.all()
    return jsonify({
        'snapshots' : [
            {
                "id": s.id,
                "code": s.code,
                "logs": s.logs,
                "env_metadata": s.env_metadata,
                "created_at": s.created_at.isoformat()
            } for s in results
        ]
    }), 200

@main.route('/snapshots/<snapshot_id>', methods=['DELETE'])
def delete_snapshot(snapshot_id):
    snapshot = DebugSnapshot.query.filter_by(id=snapshot_id).first()
    if not snapshot:
        return jsonify({"error": "Snapshot not found"}), 404
    
    db.session.delete(snapshot)
    db.session.commit()
    return jsonify({"message": "Snapshot deleted"}), 200

@main.route('/share/<snapshot_id>', methods=['POST'])
def share_snapshot(snapshot_id):
    snapshot = DebugSnapshot.query.filter_by(id=snapshot_id).first()

    if not snapshot:
        return jsonify({"error": "Snapshot not found"}), 404
    
    if not snapshot.is_shared:
        snapshot.is_shared = True
        snapshot.share_id = str(uuid.uuid4())
        db.session.commit()

    return jsonify({
        "message": "Snapshot shared successfully",
        "share_url": f"http://127.0.0.1:5000/public/{snapshot.share_id}"
    }), 200

@main.route('/public/<share_id>', methods=['GET'])
def view_shared_snapshot(share_id):
    snapshot = DebugSnapshot.query.filter_by(share_id=share_id, is_shared=True).first()

    if not snapshot:
        abort(404, description="Shared snapshot not found")
    
    return jsonify({
        "id": snapshot.id,
        "code": snapshot.code,
        "logs": snapshot.logs,
        "env_metadata": snapshot.env_metadata,
        "created_at": snapshot.created_at.isoformat()
    }), 200

# Register
@main.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')

    if not username or not password:
        return jsonify({"msg": "Username and password required"}), 400
    
    if User.query.filter_by(username=username).first():
        return jsonify({"msg": "Username already exists"}), 409
    
    new_user = User(
        username = username,
        first_name = first_name,
        last_name = last_name, 
        email = email

    )
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=new_user.id)
    return jsonify({
        "msg": "User registered successfully",
        "access_token": access_token
    }), 201

# Login

@main.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"msg": "Username and password required"}), 400
    
    user = User.query.filter_by(username=username).first()
    if not user or not user.check_password(password):
        return jsonify({"msg": "Invalid credentials"}), 401
    
    access_toke = create_access_token(identity=user.id)
    return jsonify({
        "msg": "Login successful",
        "access_toke": access_toke
    }), 200