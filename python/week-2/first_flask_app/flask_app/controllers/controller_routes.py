from flask import render_template, redirect, request, session
from flask_app import app

from flask_app.models.model_card import Card
from flask_app.models.model_user import User


@app.route("/")
def index():
    all_cards = Card.get_all()
    all_users = User.get_all()
    print(all_cards, all_cards=all_cards, all_users=all_users)
