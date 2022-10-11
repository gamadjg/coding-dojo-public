from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.model_user import User


@app.route("/")
def home():
    return render_template("components/home.html")


@app.route("/register", methods=["POST"])
def create_user():
    user_id = User.registration_validator(request.form)
    if not user_id:
        return redirect("/")
    return redirect("/welcome")


@app.route("/login", methods=["POST"])
def login_user():
    is_valid = User.login_validator(request.form)
    if not is_valid:
        return redirect("/")
    return redirect("/welcome")


@app.route("/welcome")
def result():
    # print(session["uuid"])
    user = User.get_one({"id": session["uuid"]})
    print(user)
    return render_template("components/welcome.html", user=user)


@app.route("/logout")
def logout_user():
    session.clear
    return redirect("/")
