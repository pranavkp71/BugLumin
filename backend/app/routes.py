from flask import Blueprint, jsonify, request
from .models import db, DebugSnapshot

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