# Semana 16 aula 54
## Relações em SQL

## Exercício 1

### a)
Foreign Key é o que irá relacionar a coluna de uma tabela com a coluna de outra tabela do banco de dados.

### b)
```sql
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
    "002",
    "Muito bom!",
    7,
    "004"
);
```
### c)
> Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_eros_valente`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

COmo existe uma FK linkando o id da tabela de filmes a tabela Rating, ele restringe a criação de dados na tabela rating à ids existentes na tabela Movies

### d)
```sql
ALTER TABLE Movies
DROP COLUMN rating;
```

### e)
> Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_eros_valente`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

O erro diz que não é possível apagar uma linha que está linkada com uma FK, para apagar a linha na tabela "pai", precisariamos antes apagar as linhas que tem relação com ela na tabela que recebe a FK.

----

## Exercício 2



