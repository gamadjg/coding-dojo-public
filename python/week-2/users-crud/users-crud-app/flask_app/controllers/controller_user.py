from os import abort
from flask import render_template, redirect, request, session
from flask_app.models.model_user import User
from flask_app import app


# -------------------------Create------------------------------
@app.route("/users/create")
def create_show():
    return render_template(
        "layout.html",
        title="Create",
        page_header="Add a New User",
        partial="create_user.html",
        form_action="/users/create",
    )


@app.route("/users/create", methods=["POST"])
def create_user():
    user_id = User.create_user(request.form)
    return redirect(f"/users/{user_id}")


# ------------------------EDIT-------------------------------
@app.route("/users/<int:id>/edit")
def edit_user_show(id):
    user = User.get_one({"id": id})
    return render_template(
        "layout.html",
        title="Edit",
        page_header=f"Edit User {id}",
        partial="edit_user.html",
        form_action="/users/edit",
        user=user[0],
    )


@app.route("/users/edit", methods=["POST"])
def edit_user():
    User.edit_user(request.form)
    return redirect("/")


# ------------------------READ-------------------------------
@app.route("/users/<int:id>")
def get_one(id):
    user = User.get_one({"id": id})
    return render_template(
        "layout.html",
        title="User Info",
        page_header=f"User {id}",
        partial="read_user.html",
        user=user[0],
    )


@app.route("/users")
def get_all():
    users = User.get_all()
    return render_template(
        "layout.html",
        title="Read (All)",
        page_header="All Users",
        partial="read_all.html",
        users=users,
        columnNames=users[0].keys(),
    )


# ------------------------DELETE-------------------------------
@app.route("/users/<int:id>/delete")
def delete_user(id):
    User.delete_user({"id": id})
    return redirect("/")


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html")
