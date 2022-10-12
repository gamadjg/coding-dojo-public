from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import session, flash


class Recipe:
    all_recipes = []

    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.description = data["description"]
        self.instructions = data["instructions"]
        if data["under_30"] == 0:
            print("test")
            self.under_30 = "No"
        else:
            self.under_30 = "Yes"
        self.date_cooked = data["date_cooked"]
        self.user_id = data["user_id"]
        self.user_fn = ""
        self.user_ln = ""

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM recipes JOIN users ON recipes.user_id = users.id WHERE recipes.id = %(id)s;"
        recipe = connectToMySQL(DATABASE).query_db(query, data)
        return recipe[0]

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes LEFT JOIN users ON recipes.user_id = users.id;"
        results = connectToMySQL(DATABASE).query_db(query)
        recipe_list = []
        for result in results:
            recipe = {
                "id": result["id"],
                "name": result["name"],
                "under_30": result["under_30"],
                "user_id": result["user_id"],
                "user_fn": result["first_name"],
            }
            recipe_list.append(recipe)
        return recipe_list

    @classmethod
    def create(cls, data):
        query = "INSERT INTO recipes (name, description, instructions, under_30, date_cooked, user_id) VALUES (%(name)s, %(description)s, %(instructions)s, %(under_30)s, %(date_cooked)s, %(user_id)s);"
        result = connectToMySQL(DATABASE).query_db(query, data)
        return result

    @classmethod
    def edit(cls, data):
        query = "UPDATE recipes SET name=%(name)s, description=%(description)s, instructions=%(instructions)s, under_30=%(under_30)s, date_cooked=%(date_cooked)s, user_id=%(user_id)s"
        session["uuid"] = connectToMySQL(DATABASE).query_db(query, data)
        return session["uuid"]

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM recipes WHERE recipes.id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)

    @staticmethod
    def recipe_validator(data) -> bool:
        is_valid = True

        if len(data["name"]) < 1:
            is_valid = False
            flash("name cannot be empty", "err_recipe_name")

        if len(data["description"]) < 1:
            is_valid = False
            flash("Password cannot be empty", "err_recipe_description")

        if len(data["instructions"]) < 1:
            is_valid = False
            flash("Password cannot be empty", "err_recipe_instructions")

        if len(data["date_cooked"]) < 1:
            is_valid = False
            flash("Must have valid date", "err_recipe_date_cooked")

        print(is_valid)

        if is_valid:
            new_data = {**data, "user_id": session["uuid"]}
            return Recipe.create(new_data)
        return is_valid
