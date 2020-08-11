## Exercício 1
#
#### a) 
```sql 
ALTER TABLE Actor DROP COLUMN salary;
```
O comando excluirá a coluna salary da tabela Actor.

#### b)
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
O comando altera o nome da coluna gender para sex e mantém o limite de caractéres como 6.

#### c)
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
``` 
O comando altera o limite de caracteres da coluna gender de 6 para 255.

#### d) 
```sql
ALTER TABLE Actor Change gender gender VARCHAR(100);
```

## Exercício 2
#
#### a)
```sql
UPDATE Actor
SET name = "Fernanda Torres", birth_date = "1965-09-15"
WHERE id = "003";
```

#### b)
```sql
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

#### c)
```sql
UPDATE Actor
SET name = "Irandhir Santos",
    salary = "480000", 
	birth_date = "1978-08-22",
    gender = "male",
    hometown = "Barreiros - PE",
    type = "NotDirector"
WHERE id = "005";
```

#### d)
Query:

```sql
UPDATE Actor
SET name = "Antonio Fagundes",
    salary = "700000", 
	birth_date = "",
    gender = "male",
    hometown = "",
    type = "NotDirector"
WHERE id = "010";
```

Resposta ao rodar a query
> 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Ao tentar atualizar um dado que não existe ele não da erro, a operação é feita com sucesso, porém a mensagem informa que nenhuma linha foi afetada, pois não houve correspondência então nada foi alterado.

## Exercício 3

#### a)
```sql
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";
```

#### b)
```sql
DELETE FROM Actor
WHERE salary > 1000000 AND gender = "male";
```

## Exercício 4
#
#### a)
```sql
SELECT MAX(salary) AS "Maior Salario"
FROM Actor;
```
#### b)
```sql
SELECT MIN(salary) AS "Menor salario entre atrizes"
FROM Actor WHERE gender = "female";
```

#### c)
```sql
SELECT COUNT(*) AS "Quantidade de atrizes"
FROM Actor WHERE gender = "female";
```

#### d)
```sql
SELECT SUM(salary) AS "Soma dos salários"
FROM Actor; 
```

## Exercício 5
#
#### a)
A query em questão faz a contagem de atores dividindo a contagem dentro dos dois generos existentes dentro da coluna gender.

#### b)
```sql
SELECT id, name  FROM Actor ORDER BY name DESC;
```

#### c)
```sql
SELECT * FROM Actor ORDER BY salary;
```

#### d)
```sql
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

#### e)
```sql
SELECT AVG(salary) AS "Media de salario por genero", gender
FROM Actor 
GROUP BY gender;
```

## Exercício 6
#
#### a)
```sql
ALTER TABLE Movies
ADD playing_limit_date DATE;
```

#### b)
Quando eu criei a tabela já criei com FLOAT, mas o comando seria o seguinte.

```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

#### c)

Query para filme ainda em cartaz:
```sql
UPDATE Movies
SET playing_limit_date = "2020-09-10"
WHERE id = "004";
```
Query para filme fora de cartaz:
```sql
UPDATE Movies
SET playing_limit_date = "2020-05-25"
WHERE id = "002";
```

#### d)
> 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Ao tentar atualizar um ainformação de uma linha já deletada a resposta não é um erro, a operação é realizada porém como nada é encontrado e nenhuma linha é alterada

## Exercício 7

#### a)
```sql 
SELECT * FROM Movies
WHERE rating > 7.5;
```

#### b)
```sql
SELECT AVG(rating) AS "Media de avaliações"
FROM Movies;
```

#### c)
```sql
SELECT COUNT(*) AS "Quantidade de filmes em cartaz"
FROM Movies;
```

#### d)
```sql
SELECT COUNT(*) AS "Próximos lançamentos"
FROM Movies
WHERE release_date > CURDATE();
```
#### e)
```sql
SELECT MAX(rating) AS "Maior avaliação"
FROM Movies;
```

#### f)
```sql
SELECT MIN(rating) AS "Maior avaliação"
FROM Movies;
```

