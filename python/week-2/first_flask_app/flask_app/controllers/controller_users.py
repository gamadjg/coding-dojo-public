from flask import render_template, redirect, request, session
from flask_app import app

from flask_app.models.model_user import User


@app.route("/")
def hello_users():
    return render_template("index.html")


@app.route("/new")
def new_user():
    return redirect("/")


@app.route("create", methods="[POST]")
def create_user():
    return redirect("/")


@app.route("/<int:id>/show")
def get_user(id):
    # get single user from from id
    return render_template("index.html")


@app.route("/<int:id>/edit")
def edit_user(id):
    # get the info from users id
    return render_template("index.html")


@app.route("/<int:id>/update", methods="[POST]")
def update_user(id):
    # push changes
    return redirect("/")


@app.route("/<int:id>/delete", methods="[POST]")
def delete_user(id):
    return redirect("/")
