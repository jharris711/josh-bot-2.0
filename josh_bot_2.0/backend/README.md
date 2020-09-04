# Flask App Boilerplate

Quick start for Flask apps. Procfile is added for Heroku deployment with Gunicorn. Requirements.txt will install Flask, Flask-migrate, flask-SQLAlchemy, Flask-WTForms, Gunicorn, and Python-dotenv.

Pre-reqs: Virtualenv, PostgreSQL (recommended) or SQLite3

To use:
    
-> Open your terminal

-> Navigate to the `flask_app_boilerplate` dir

-> Set up a virtualenv environment: ` $ virtualenv env `

-> Activate virtual environment: ` $ source env/bin/activate `

-> Install dependencies: ` $ pip install -r requirements.txt `

-> Set .env variables

-> Configure .gitignore

-> Create your models in models.py: Declaring models => https://flask-sqlalchemy.palletsprojects.com/en/2.x/models/

-> Initialize DB: ` $ flask db init `

-> Make migrations: ` $ flask db migrate `

-> Apply migrations: ` $ flask db upgrade `
