SELECT * FROM dojos;

DELETE FROM ninjas WHERE id = 9; 

SELECT * FROM ninjas;

select * from ninjas join dojos on ninjas.id = dojos.id;

SELECT * FROM dojos LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = 1;

Select * from dojos where dojos.id = 1;

INSERT INTO ninjas (first_name, last_name, age, dojo_id)
VALUES
	('David', 'Gama', 30, 1);

-- INSERT INTO burgers (name,bun,meat,calories, restaurant_id)
-- VALUES 
-- 	(%(name)s,%(bun)s,%(meat)s,%(calories)s,%(restaurant_id)s)


SELECT * FROM dojos LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojo.id = 2