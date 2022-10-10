from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.model_restaurants import Restaurant


@app.route("/create/restaurant")
def show_create_restaurant():
    return render_template(
        "index.html", page_title="Restaurant Create", body="restaurant_form.html"
    )


@app.route("/create/restaurant", methods=["POST"])
def create_restaurant():
    Restaurant.save(request.form)
    return redirect("/restaurants")


@app.route("/restaurants")
def show_restaurants():
    return render_template(
        "index.html",
        page_title="Restaurants",
        body="restaurant_results.html",
        restaurants=Restaurant.get_all(),
    )


@app.route("/show/restaurant/<int:id>")
def show_restaurant(id):
    restaurant = Restaurant.get_restaurant_with_burgers({"id": id})
    return render_template(
        "index.html",
        page_title="Restaurant details",
        body="restaurant_details.html",
        restaurant=restaurant,
    )
