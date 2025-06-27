from flask import Flask

def create_app():
    app = Flask(__name__)

    from .routes import main
    app.register_blueprint(main)

    @app.route("/test")
    def test():
        return "test"

    return app