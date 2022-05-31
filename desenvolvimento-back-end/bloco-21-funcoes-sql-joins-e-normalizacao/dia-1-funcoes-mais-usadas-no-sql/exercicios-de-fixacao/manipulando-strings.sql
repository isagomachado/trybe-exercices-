-- Exemplos do course

SELECT UCASE('Oi, eu sou uma string');
SELECT LCASE('Oi, eu sou uma STRING');
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');
SELECT LEFT('Oi, eu sou uma string', 3);
SELECT RIGHT('Oi, eu sou uma string', 6);
SELECT CHAR_LENGTH('Oi, eu sou uma string');
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2);
SELECT SUBSTRING('Oi, eu sou uma string', 5);

-- exemplo com sakila

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film
WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;


-- Exercicio de fixação

SELECT UCASE('trybe');
SELECT REPLACE('Você ja ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
SELECT char_length('Uma frase qualquer');
SELECT substr('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
