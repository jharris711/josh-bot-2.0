from flask import request, render_template, make_response, redirect, url_for, jsonify
from flask import current_app as app
from os import getenv, environ
from time import sleep
from tweepy import Cursor, TweepError, API, OAuthHandler

from .models import db


# ---------------------------------------------------------------------------- #
# API key:
api_key = environ.get("CONSUMER_KEY")
# API secret key:
api_secret = environ.get("CONSUMER_SECRET")
# Access token: 
access_token = environ.get("API_KEY")
# Access token secret: 
access_token_secret = environ.get("API_SECRET")
# ---------------------------------- Tweepy ---------------------------------- #
# Tweepy 0Auth 1a authentication:
auth = OAuthHandler(api_key, api_secret)
auth.set_access_token(access_token, access_token_secret)
# API Variable:
api = API(auth, wait_on_rate_limit=True)
# ---------------------------------------------------------------------------- #


@app.route('/', methods=['GET'])
def home_page():
    return render_template('home.html')


def lookup_user_and_return_id_sn_object(user_id):
    try:
        user = api.get_user(user_id)
        return user
    except:
        pass


# Returns follower ids in JSON Object:
@app.route('/my-followers', methods=['GET'])
def get_my_followers():
    follower_id_list = []
    user_list = []
    try:
        for page in Cursor(api.followers_ids).pages():
            follower_id_list.extend(page)
            sleep(10)
        for user in follower_id_list:
            user_list.append(lookup_user_and_return_id_sn_object(user))
        user_dict = {user.id: user.screen_name for user in user_list}
        response = (user_dict, 200)
        # print(f"response: {response}")
        return response
    except TweepError as error:
        print(f"-> Error: {error.reason}")
        pass


@app.route('/people-i-follow', methods=['GET'])
def get_people_i_follow():
    following_id_list = []
    user_list = []
    try:
        for page in Cursor(api.friends_ids).pages():
            following_id_list.extend(page)
            sleep(10)
        for user in following_id_list:
            user_list.append(lookup_user_and_return_id_sn_object(user))
        user_dict = {user.id: user.screen_name for user in user_list}
        response = (jsonify(user_dict), 200)
        return response
    except TweepError as error:
        print(f"-> Error: {error.reason}")
        pass