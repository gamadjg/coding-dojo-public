from flask import render_template, redirect, request, session
from flask_app import app

from flask_app.models.model_card import Card

# ----------------------------Create--------------------------------------
@app.route("/card/new")
def card_new():
    return render_template("card_new.html")


@app.route("/card/create", methods="[POST]")
def card_create():
    Card.create_card(request.form)
    return redirect("/")


# ----------------------------READ--------------------------------------
@app.route("/card/<int:id>")
def card_get(id):
    Card.get_card(id)
    return render_template("index.html")


@app.route("/card/all")
def card_get_all():
    Card.get_all()
    return render_template("index.html")


@app.route("/card/<int:id>/edit")
def card_edit(id):
    Card.get_card(id)
    return render_template("index.html")


# ----------------------------UPDATE--------------------------------------
@app.route("/card/<int:id>/update", methods="[POST]")
def card_update(id):
    Card.update_card(id)
    return redirect("/")


# ----------------------------DELETE--------------------------------------
@app.route("/card/<int:id>/delete", methods="[POST]")
def card_delete(id):
    Card.delete_card(id)
    return redirect("/")
