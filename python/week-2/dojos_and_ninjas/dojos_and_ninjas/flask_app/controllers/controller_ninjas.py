from flask_app import app
from flask_app.models.model_ninjas import Ninja
from flask_app.models.model_dojos import Dojo
from flask import render_template, redirect, request


@app.route("/ninjas")
def create_ninja_form():
    dojos = Dojo.get_all()
    return render_template(
        "layout.html", page_title="New Ninja", body="ninja_form.html", dojos=dojos
    )


@app.route("/ninjas/create", methods=["POST"])
def create_ninja():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "age": request.form["age"],
        "dojo_id": request.form["dojo_id"],
    }
    Ninja.create(data)
    return redirect(f"/dojos/{request.form['dojo_id']}")
