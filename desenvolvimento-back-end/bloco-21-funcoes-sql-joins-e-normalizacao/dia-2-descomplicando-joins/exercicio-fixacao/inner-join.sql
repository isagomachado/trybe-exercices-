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

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- Exercicio 4

SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.first_name, c.email, c.address_id, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

-- Exercicio 5 


