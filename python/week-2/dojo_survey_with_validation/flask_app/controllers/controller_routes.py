from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.model_user import User


@app.route("/")
def survey_home():
    return render_template("components/form.html")


@app.route("/process", methods=["POST"])
def process_form():
    user_id = User.validator(request.form)
    if not user_id:
        return redirect("/")
    return redirect("/result")


@app.route("/result")
def result():
    user = User.get_one({"id": session["uuid"]})
    return render_template("components/result.html", user=user)
