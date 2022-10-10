from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash, session


class User:
    def __init__(self, data):
        self.id = id
        self.name = data["name"]
        self.location = data["location"]
        self.favorite_language = data["favorite_language"]
        self.comment = data["comment"]

    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (name, location, favorite_language, comment) VALUES (%(name)s, %(location)s, %(favorite_language)s, %(comment)s);"
        result = connectToMySQL(DATABASE).query_db(query, data)
        session["uuid"] = result
        print(session["uuid"])
        return result

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM users WHERE users.id = %(id)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        print(result[0])
        user = User(result[0])
        # print(user)
        return user

    @staticmethod
    def validator(data) -> bool:
        is_valid = True
        if len(data["name"]) < 1:
            is_valid = False
            flash("Name cannot be empty", "err_name")
        if "location" not in data:
            flash("Location cannot be empty", "err_location")
            is_valid = False
        print(is_valid)

        if is_valid:
            User.create(data)
        return is_valid
