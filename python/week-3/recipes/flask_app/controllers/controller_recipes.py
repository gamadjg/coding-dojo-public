from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.model_recipes import Recipe
from flask_app.models.model_user import User

# ---------------------------------------READ-----------------------------
@app.route("/recipes")
def result():
    recipes = Recipe.get_all()
    return render_template("components/welcome.html", recipes=recipes)


@app.route("/recipes/<int:id>")
def show_recipe(id):
    recipe = Recipe.get_one({"id": id})
    return render_template("components/recipe_show.html", recipe=recipe)


# ---------------------------------------CREATE-----------------------------
@app.route("/recipes/new")
def create_recipe_show():
    return render_template("components/recipe_create.html")


@app.route("/recipes/new", methods=["POST"])
def create_recipe_process():
    recipe = Recipe.recipe_validator(request.form)
    if not recipe:
        return redirect("/recipes/new")
    return redirect("/recipes")


# ---------------------------------------EDIT-----------------------------
@app.route("/recipes/edit/<int:id>")
def edit_recipe_show(id):
    recipe = Recipe.get_one({"id": id})
    return render_template("components/recipe_edit.html", recipe=recipe)


@app.route("/recipes/edit/<int:id>", methods=["POST"])
def edit_recipe(id):
    recipe = Recipe.recipe_validator(request.form)
    if not recipe:
        redirect("/recipes/edit/{id}")
    return redirect("/recipes")


# ---------------------------------------DELETE-----------------------------
@app.route("/recipes/delete/<int:id>")
def delete_recipe(id):
    Recipe.delete({"id": id})
    return redirect("/recipes")
