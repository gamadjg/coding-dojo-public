from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.model_burgers import Burger
from flask_app import DATABASE


# We need to import the burger class from our models
class Restaurant:
    def __init__(self, db_data):
        self.id = db_data["id"]
        self.name = db_data["name"]
        self.created_at = db_data["created_at"]
        self.updated_at = db_data["updated_at"]
        # We create a list so that later we can add in all the burgers that are associated with a restaurant.
        self.burgers = []

    @classmethod
    def get_restaurant_with_burgers(cls, data):
        query = "SELECT * FROM restaurants LEFT JOIN burgers ON burgers.restaurant_id = restaurants.id WHERE restaurants.id = %(id)s;"
        results = connectToMySQL(DATABASE).query_db(query, data)
        # results will be all columns + data of the joined tables
        # dict_keys(['id', 'name', 'created_at', 'updated_at', 'burgers.id', 'burgers.name', 'bun', 'meat', 'calories', 'burgers.created_at', 'burgers.updated_at', 'restaurant_id'])

        # Create restaurant object
        # cls() calls the class constructor of the class that we're currently in: Restaurant ->__init__()
        # restaurant = cls(results[0])

        # Calling the class by it's name does the same thing
        restaurant = Restaurant(results[0])
        print(restaurant.name)
        for row_from_db in results:
            # Now we parse the burger data to make instances of burgers and add them into our list.
            burger_data = {
                "id": row_from_db["burgers.id"],
                "name": row_from_db["burgers.name"],
                "bun": row_from_db["bun"],
                "meat": row_from_db["meat"],
                "calories": row_from_db["calories"],
                "created_at": row_from_db["burgers.created_at"],
                "updated_at": row_from_db["burgers.updated_at"],
            }
            restaurant.burgers.append(Burger(burger_data))

        # print(restaurant.name)
        return restaurant

    @classmethod
    def save(cls, data):
        query = "INSERT INTO restaurants (name) VALUES (%(name)s);"
        return connectToMySQL(DATABASE).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM restaurants;"
        restaurants_from_db = connectToMySQL(DATABASE).query_db(query)
        restaurants = []
        for r in restaurants_from_db:
            restaurants.append(cls(r))
        return restaurants
