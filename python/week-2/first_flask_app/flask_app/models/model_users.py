from flask_app.config.mysqlconnection import mySQLConnection
from flask_app import DATABASE


class User:
    def __init__(self, data: dict):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]

    @classmethod
    def create(cls, data: dict):
        query = "INSERT INTO users (first_name, last_name) VALUES (%(first_name)s, %(last_name)s);"
        user_id = mySQLConnection(DATABASE).query_db(query, data)
        return user_id

    @classmethod
    def new(cls):
        pass

    @classmethod
    def get_one(cls, data: dict):
        query = "SELECT * FROM users WHERE id = %(id)s"
        result = mySQLConnection(DATABASE).query_db(query, data)

        if not result:
            return False
        return cls(result[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        all_results = mySQLConnection(DATABASE).query_db(
            query
        )  # Resturns list of dictionaries

        all_users = []

        for result in all_results:
            all_users.append(result)

        if not result:
            return False
        return cls(result[0])

    @classmethod
    def edit_one(cls):
        pass

    @classmethod
    def update_one(cls):
        pass

    @classmethod
    def delete_one(cls):
        pass
