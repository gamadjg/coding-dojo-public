from sqlite3 import DatabaseError
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE


class User:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def get_one(cls, data: dict):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        user = connectToMySQL(DATABASE).query_db(query, data)
        return user

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        all_users = connectToMySQL(DATABASE).query_db(query)
        user_list = []
        for user in all_users:
            # user_list.append(cls(user))
            user_list.append(user)

        return user_list

    @classmethod
    def create_user(cls, data: dict):
        query = "INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s, %(last_name)s, %(email)s);"
        user_id = connectToMySQL(DATABASE).query_db(query, data)
        return user_id

    @classmethod
    def edit_user(cls, data: dict):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s WHERE id = %(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def delete_user(cls, data: dict):
        query = "DELETE FROM users WHERE id = %(id)s"
        return connectToMySQL(DATABASE).query_db(query, data)
