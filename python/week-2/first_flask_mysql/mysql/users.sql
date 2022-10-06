-- Add Values
INSERT INTO users (first_name, last_name, email, age)
VALUES
	("David", "Gama", "david@gmail.com", 30),
    ("Aaron", "Gama", "aaron@gmail.com", 22);

-- Get all users    
SELECT * FROM users;

SELECT * FROM users
WHERE id = 1;

-- 