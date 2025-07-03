from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Boolean, Index
from datetime import datetime
import uuid
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(80), unique = True, nullable = False)
    first_name = db.Column(db.String(80), nullable = True)
    last_name = db.Column(db.String(80), nullable = True)
    password_hash = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(120), unique = True, nullable = True)
    created_at = db.Column(db.DateTime, default = datetime.utcnow)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def full_name(self):
        return f"{self.first_name or ''} {self.last_name or ''}".strip()

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

