from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL
from flask_app import DATABASE

# import the entire file, not just the class
from flask_app.models import model_card


class User:
    def __init__(self, data: dict):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]

    @classmethod
    def create(cls, data: dict):
        query = "INSERT INTO users (first_name, last_name) VALUES (%(first_name)s, %(last_name)s);"
        user_id = MySQLConnection(DATABASE).query_db(query, data)
        return user_id

    @classmethod
    def new(cls):
        pass

    @classmethod
    def get_one(cls, data: dict):
        query = "SELECT * FROM users JOIN cards ON uses.id = cards.user.id WHERE users.id = %(id)s"
        results = MySQLConnection(DATABASE).query_db(query, data)

        if not results:
            return False

        user_instance = cls(results[0])
        all_cards = []
        for dict in results:
            card_info = {
                "id": dict["cards.id"],
                "updated_at": dict["cards.updated_at"],
                "created_at": dict["cards.created_at"],
                "name": dict["cards.name"],
                "type": dict["cards.type"],
                "cost": dict["cards.cost"],
                "description": dict[""],
            }
        card_instance = model_card(card_info)
        all_cards.append(card_instance)

        user_instance.cards = all_cards

        return cls(result[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        all_results = MySQLConnection(DATABASE).query_db(
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
