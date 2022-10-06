from flask_app.config.mysql-connection import mySQLConnection


class User:
    def __init__(self, data:dict):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        # self.id = data['id']
        # self.id = data['id']
        # self.id = data['id']
        # self.id = data['id']
        
    @classmethod
    def create(cls):
        query = "INSERT INTO friends (first_name, last_name) VALUES (%(first_name), %(last_name));"
        pass
    @classmethod
    def new(cls):
        pass
    @classmethod
    def get_all(cls):
        pass
    @classmethod
    def get_one(cls):
        pass
    @classmethod
    def edit_one(cls):
        pass
    @classmethod
    def update_one(cls):
        pass
    @classmethod
    def delete_one(cls):
        pass