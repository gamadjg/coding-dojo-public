-- Select all
SELECT * FROM users;

-- Select one
SELECT * FROM users WHERE users.id = 1;

-- Insert user into users table
INSERT INTO users (first_name, last_name, email, password)
VALUES
	('David', 'Gama', 'david@gmail.com', 'test');
