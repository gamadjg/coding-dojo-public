from flask_app import app
from flask import redirect, request, session
from flask_app.models.model_user import User


@app.route("/register", methods=["POST"])
def create_user():
    user_id = User.registration_validator(request.form)
    if not user_id:
        return redirect("/")
    return redirect("/recipes")


@app.route("/login", methods=["POST"])
def login_user():
    is_valid = User.login_validator(request.form)
    if not is_valid:
        return redirect("/")
    return redirect("/recipes")


@app.route("/logout")
def logout_user():
    session.pop("uuid")
    return redirect("/")
