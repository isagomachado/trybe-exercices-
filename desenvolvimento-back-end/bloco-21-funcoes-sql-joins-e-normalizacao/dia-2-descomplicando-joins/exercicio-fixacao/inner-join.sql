--- Exercicio 1

-- SELECT * FROM sakila.actor; 

SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

-- Exercicio 2

SELECT * FROM sakila.staff; 
SELECT * FROM sakila.address;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;

-- Exercicio 3

