from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.model_dojos import Dojo


@app.route("/dojos")
def show_all_dojos():
    dojos = Dojo.get_all()
    return render_template(
        "layout.html",
        page_title="Dojos",
        body="dojos_all.html",
        dojos=dojos,
    )


@app.route("/create/dojo", methods=["POST"])
def create_dojo():
    Dojo.create(request.form)
    return redirect("/dojos")


@app.route("/dojos/<int:id>")
def show_dojo(id):
    dojo = Dojo.get_dojo({"id": id})
    return render_template(
        "layout.html", page_title="Dojo Show", body="dojo_details.html", dojo=dojo
    )
