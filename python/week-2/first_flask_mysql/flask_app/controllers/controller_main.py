from flask import render_template, session, render_template, redirect, request
from flask_app import app

#
from flask_app.models.model_main import Users


@app.route("/")
def hello_users():
    return render_template("index.html")


@app.route("/new")
def new_user():
    return redirect("index.html")


@app.route("create", methods="[POST]")
def create_user():
    return render_template("index.html")


@app.route("/<int:id>/show", methods="[GET]")
def get_user(id):
    # get single user from from id
    return render_template("index.html")


@app.route("/<int:id>/edit", methods="[GET]")
def edit_user(id):
    # get the info from users id
    return render_template("index.html")


@app.route("/<int:id>/update", methods="[POST]")
def update_user(id):
    # push changes
    return redirect("index.html")


@app.route("/<int:id>/delete", methods="[POST]")
def delete_user(id):
    return redirect("index.html")
