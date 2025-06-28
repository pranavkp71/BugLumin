from flask import Blueprint, jsonify, request
from .models import db, DebugSnapshot
import uuid

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
        return jsonify({"error": "Snapshot not found"}), 404

    return jsonify({
        "id": snapshot.id,
        "code": snapshot.code,
        "logs": snapshot.logs,
        "env_metadata": snapshot.env_metadata,
        "created_at": snapshot.created_at.isoformat()
    }), 200