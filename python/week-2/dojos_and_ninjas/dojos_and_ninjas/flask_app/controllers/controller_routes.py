from flask import redirect
from flask_app import app


@app.route("/")
def index():
    return redirect("/dojos")
