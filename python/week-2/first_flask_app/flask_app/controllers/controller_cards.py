from flask import render_template, session, render_template, redirect, request
from flask_app import app

#
from flask_app.models.model_cards import Card


@app.route("/")
def cards():
    Card.get_all()
    return render_template("index.html")


@app.route("/new")
def new_card():
    return redirect("index.html")


@app.route("create", methods="[POST]")
def create_card():
    return render_template("index.html")


@app.route("/<int:id>/show", methods="[GET]")
def get_card(id):
    # get single card
    # from from id
    return render_template("index.html")


@app.route("/<int:id>/edit", methods="[GET]")
def edit_card(id):
    # get the info from card
    # s id
    return render_template("index.html")


@app.route("/<int:id>/update", methods="[POST]")
def update_card(id):
    # push changes
    return redirect("index.html")


@app.route("/<int:id>/delete", methods="[POST]")
def delete_card(id):
    return redirect("index.html")
