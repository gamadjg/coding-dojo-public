SELECT * FROM burgers;

SELECT * FROM restaurants;

-- INSERT INTO restaurants (name)

SELECT * FROM restaurants LEFT JOIN burgers ON burgers.restaurant_id = restaurants.id WHERE restaurants.id = 2
