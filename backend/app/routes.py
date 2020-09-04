from flask import request, render_template, make_response, redirect, url_for
from flask import current_app as app
from .models import db


@app.route('/', methods=['GET'])
def home_page():
    return render_template('home.html')