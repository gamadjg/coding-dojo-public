from flask_app.config.mysqlconnection import mySQLConnection
from flask_app import DATABASE


class Card:
    def __init__(self, data: dict):
        self.id = data["id"]
        self.name = data["name"]
        self.type = data["type"]
        # self.id = data['id']
        # self.id = data['id']
        # self.id = data['id']

    @classmethod
    def create(cls, data: dict):
        query = "INSERT INTO cards (name, type) VALUES (%(name)s, %(type)s);"
        card_id = mySQLConnection(DATABASE).query_db(query, data)
        return card_id

    @classmethod
    def new(cls):
        pass

    @classmethod
    def get_one(cls, data: dict):
        query = "SELECT * FROM cards WHERE id = %(id)s"
        result = mySQLConnection(DATABASE).query_db(query, data)

        if not result:
            return False
        return cls(result[0])

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM cards"
        # Resturns list of dictionaries
        all_results = mySQLConnection(DATABASE).query_db(query)
        all_cards = []
        for result in all_results:
            all_cards.append(result)
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
