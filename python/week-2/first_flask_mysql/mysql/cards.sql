-- Add Values
INSERT INTO users (first_name, last_name, email, age)
VALUES
	("David", "Gama", "david@gmail.com", 30),
    ("Aaron", "Gama", "aaron@gmail.com", 22);
    
    
-- 
SELECT * FROM users
LEFT JOIN cards ON users.id = cards.users_id