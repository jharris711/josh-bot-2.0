from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bootstrap import Bootstrap
from flask_cors import CORS
import os

db = SQLAlchemy()
migrate = Migrate()
bootstrap = Bootstrap()
cors = CORS()


def create_app():
    # Construct the core application.
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object(os.environ['APP_SETTINGS'])

    db.init_app(app)
    migrate.init_app(app, db)
    bootstrap.init_app(app)
    cors.init_app(app)

    with app.app_context():
        from app import routes  # Import routes
        from app import models  # Import models
        db.create_all()  # Create database tables for our data models

        return app
