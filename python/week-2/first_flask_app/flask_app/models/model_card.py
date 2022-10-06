from flask_app.config.mysqlconnection import MySQLConnection

from flask_app import DATABASE


class Card:
    def __init__(self, data: dict):
        self.id = data["id"]
        self.name = data["name"]
        self.type = data["type"]
        self.cost = data["cost"]
        self.description = data["description"]
        self.cost = data["cost"]
        self.cost = data["cost"]

    @classmethod
    def create(cls, data: dict):
        query = "INSERT INTO cards (name, type) VALUES (%(name)s, %(type)s);"
        card_id = MySQLConnection(DATABASE).query_db(query, data)
        return card_id

    @classmethod
    def new(cls):
        pass

    @classmethod
    def get_card(cls, data: dict):
        query = "SELECT * FROM cards WHERE id = %(id)s"
        result = MySQLConnection(DATABASE).query_db(query, data)

        if not result:
            return False
        return cls(result[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM cards"
        # Resturns list of dictionaries
        all_results = MySQLConnection(DATABASE).query_db(query)
        all_cards = []
        for result in all_results:
            all_cards.append(result)
        if not result:
            return False
        return cls(result[0])

    @classmethod
    def edit_card(cls):
        pass

    @classmethod
    def update_card(cls):
        pass

    @classmethod
    def delete_card(cls):
        pass
