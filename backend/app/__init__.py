from flask import Flask
from flask_cors import CORS
from .models import db
from .routes import main
from flask_jwt_extended import JWTManager

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///buglumin.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = 'your_super_secret_key'

    db.init_app(app)
    jwt = JWTManager(app)
    
    app.register_blueprint(main)

    with app.app_context():
        db.create_all()

    return app