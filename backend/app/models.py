from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Boolean, Index
from datetime import datetime
import uuid

db = SQLAlchemy()

class DebugSnapshot(db.Model):
    __tablename__ = 'debug_snapshots'
    __tablen_args__ = (
        Index('idx_created_at', 'created_at'),
    )

    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    code = db.Column(db.Text, nullable=False)
    logs = db.Column(db.Text)
    env_metadata = db.Column(db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    is_shared = db.Column(db.Boolean, default=False)
    share_id = db.Column(db.String(36), unique=True, nullable=True)
    is_public = db.Column(Boolean, default=False)

