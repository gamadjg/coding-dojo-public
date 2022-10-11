from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE, bcrypt
from flask import flash, session
import re

EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")


class User:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]

    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        result = connectToMySQL(DATABASE).query_db(query, data)
        session["uuid"] = result
        print(session["uuid"])
        return result

    @classmethod
    def get_one_by_email(cls, data):
        query = "SELECT * FROM users WHERE users.email = %(email)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        print(result[0])
        user = User(result[0])
        print("user by email")
        print(user)
        return user

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM users WHERE users.id = %(id)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        print("Get one result")
        print(result[0])
        user = User(result[0])
        # print(user)
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
        (print("validators clear"))
        if is_valid:

            potential_user = User.get_one_by_email({"email": data["email"]})
            print(potential_user.first_name)
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
                    print("login uuid: " + str(session["uuid"]))
            # user_data = {
            #     "first_name": data["first_name"],
            #     "last_name": data["last_name"],
            #     "email": data["email"],
            #     "password": bcrypt.check_password_hash(
            #         potential_user["password"], data["password"]
            #     ),
            # }
            # User.create(user_data)
        return is_valid

    @staticmethod
    def registration_validator(data):
        # for val in data:
        #     print(val)

        is_valid = True
        if len(data["first_name"]) < 1:
            is_valid = False
            flash("First name cannot be empty", "err_first_name_registration")
        if len(data["last_name"]) < 1:
            is_valid = False
            flash("Last name cannot be empty", "err_last_name_registration")
        if len(data["email"]) < 1:
            is_valid = False
            flash("email cannot be empty", "err_email_registration")
        elif not EMAIL_REGEX.match(data["email"]):
            is_valid = False
            flash("Invalid email address", "err_email_registration")
        if len(data["password"]) < 1:
            is_valid = False
            flash("Password cannot be empty", "err_password_registration")
        if len(data["confirmation_password"]) < 1:
            is_valid = False
            flash(
                "Confirmation password cannot be empty",
                "err_confirmation_password_registration",
            )
        if data["password"] != data["confirmation_password"]:
            is_valid = False
            flash("Passwords do not match", "err_confirm_password_registration")

        if is_valid:
            user_data = {
                "first_name": data["first_name"],
                "last_name": data["last_name"],
                "email": data["email"],
                "password": bcrypt.generate_password_hash(data["password"]),
            }
            User.create(user_data)
        return is_valid
