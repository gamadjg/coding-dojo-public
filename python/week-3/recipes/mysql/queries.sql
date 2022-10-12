SELECT * FROM recipes 
JOIN users ON recipes.user_id = users.id;
-- WHERE recipes.user_id = 4;

SELECT * FROM recipes JOIN users ON recipes.user_id = users.id WHERE recipes.user_id = 6;

-- select all users
SELECT * FROM users;

-- select all recipes
SELECT * FROM recipes;

-- delete recipe
DELETE FROM recipes WHERE recipes.id = 2;

-- one to many select all recipes for a user
SELECT * FROM users
LEFT JOIN recipes ON users.id = recipes.user_id WHERE users.id = 4;

-- Creating a new user
INSERT INTO users (first_name, last_name, email, password)
VALUES
	('David', 'Gama', "david@gmail.com", "test");
    
-- Creating a new recipe
INSERT INTO recipes (name, description, instructions, under_30, date_cooked, user_id)
VALUES
	("dog food", "its dog food", "open bag, pour in bowl", 1, '2022-10-11', 6);
	-- ("Beef Tacos", "it's meat in a tortilla...", "cook meat, heat up tortillas, put meat on tortillas, eat", 1, '2022-10-11', 4),
	-- ("Cereal", "Breakfast", "Place milk in bowl, add cereal", 1, '2022-10-11', 4);