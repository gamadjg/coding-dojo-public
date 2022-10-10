from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.model_ninjas import Ninja
from flask_app import DATABASE


class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.ninjas = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        dojos = []
        for result in results:
            dojos.append(Dojo(result))
        return dojos

    @classmethod
    def get_dojo(cls, data):
        for val in data:
            print(data[val])
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)

        dojo = Dojo(results[0])
        for row in results:
            ninja_data = {
                "id": row["ninjas.id"],
                "first_name": row["first_name"],
                "last_name": row["last_name"],
                "age": row["age"],
                "created_at": row["ninjas.created_at"],
                "updated_at": row["ninjas.updated_at"],
            }
            dojo.ninjas.append(Ninja(ninja_data))
        return dojo

    @classmethod
    def create(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"
        return connectToMySQL(DATABASE).query_db(query, data)
