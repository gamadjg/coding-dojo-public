from flask import render_template, redirect, request, session
from flask_app import app


@app.route("/")
def index():
    return redirect("/users")


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404
