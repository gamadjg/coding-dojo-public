from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE, bcrypt
from flask import flash, session
from flask_app.models import model_recipes as recipes
import re

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")


class User:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]
        self.recipe_list = []

    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        session["uuid"] = connectToMySQL(DATABASE).query_db(query, data)
        session["first_name"] = data["first_name"]
        return session["uuid"]

    @classmethod
    def get_one_by_email(cls, data):
        query = "SELECT * FROM users WHERE users.email = %(email)s"
        result = connectToMySQL(DATABASE).query_db(query, data)

        if not result:
            return False
        user = User(result[0])
        return user

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM users LEFT JOIN recipes ON users.id = recipes.user_id WHERE users.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)

        user = User(results[0])

        for result in results:
            recipe = {
                "id": result["recipes.id"],
                "name": result["name"],
                "description": result["description"],
                "instructions": result["instructions"],
                "under_30": result["under_30"],
                "date_cooked": result["date_cooked"],
                "user_id": result["user_id"],
            }

            user.recipe_list.append(recipes.Recipe(recipe))
        return user

    @staticmethod
    def login_validator(data) -> bool:
        is_valid = True

        if len(data["email"]) < 1:
            is_valid = False
            flash("email cannot be empty", "err_email_login")
        elif not EMAIL_REGEX.match(data["email"]):
            is_valid = False
            flash("Invalid email address", "err_email_login")
        if len(data["password"]) < 1:
            is_valid = False
            flash("Password cannot be empty", "err_password_login")
        if is_valid:
            potential_user = User.get_one_by_email({"email": data["email"]})
            if not potential_user:
                is_valid = False
                flash("Email not found", "err_email_login")
            else:
                if not bcrypt.check_password_hash(
                    potential_user.password, data["password"]
                ):
                    print("bcrypt cont")
                    is_valid = False
                    flash("Incorrect password", "err_password_login")
                else:
                    session["uuid"] = potential_user.id
                    session["first_name"] = potential_user.first_name
                    print("login uuid: " + str(session["uuid"]))
        return is_valid

    @staticmethod
    def registration_validator(data):
        is_valid = True
        if len(data["first_name"]) < 3:
            is_valid = False
            flash(
                "First name must be at least 3 characters",
                "err_first_name_registration",
            )
        if len(data["last_name"]) < 3:
            is_valid = False
            flash(
                "Last name must be at least 3 characters", "err_last_name_registration"
            )
        if len(data["email"]) < 1:
            is_valid = False
            flash("email cannot be empty", "err_email_registration")
        elif not EMAIL_REGEX.match(data["email"]):
            is_valid = False
            flash("Invalid email address", "err_email_registration")
        else:
            potential_user = User.get_one_by_email({"email": data["email"]})
            if potential_user:
                is_valid = False
                flash("Email already exists", "err_email_registration")
        if len(data["password"]) < 1:
            is_valid = False
            flash("Password cannot be empty", "err_password_registration")
        if len(data["confirmation_password"]) < 1:
            is_valid = False
            flash(
                "Confirmation password cannot be empty",
                "err_confirmation_password_registration",
            )
        elif data["password"] != data["confirmation_password"]:
            is_valid = False
            flash(
                "Password and confirmation password do not match",
                "err_confirmation_password_registration",
            )
        if is_valid:
            user_data = {
                "first_name": data["first_name"],
                "last_name": data["last_name"],
                "email": data["email"],
                "password": bcrypt.generate_password_hash(data["password"]),
            }
            User.create(user_data)
        return is_valid
