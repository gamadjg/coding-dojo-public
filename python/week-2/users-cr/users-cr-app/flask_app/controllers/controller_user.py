from flask import render_template, redirect, request, session
from flask_app.models.model_user import User
from flask_app import app


@app.route("/")
def index():
    return redirect("/users")


@app.route("/users")
def read_all():
    users = User.get_all()
    return render_template("read.html", users=users)


@app.route("/users/new")
def create_user():
    return render_template("create.html")


@app.route("/users/process", methods=["POST"])
def edit_user():
    User.create_user(request.form)
    return redirect("/")


# @app.route("/users/create", methods="[POST]")
# def edit_user(id):
#     print(**request.form)
#     return redirect("/")
