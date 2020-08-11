## Exercício 1

### a)
- CREATE TABLE: operação que cria uma tabela;
- VARCHAR(n): Aceita strings de no máximo n caracteres, no caso do exercício 255 caractéres para id e name, e 6 caractéres para gênero;
- DATE: representa uma data (YYYY-MM-DD);
- NOT NULL (restrição): define que os valores dessas colunas não pode ser nulo;
- PRIMARY KEY (restrição): indica a chave primária;

### b) 
- SHOW DATABASES: retorna o nome da base de dados que estamos trabalhando;
- SHOW TABLES: retorna as tabelas criadas na base de dados trabalhada;

### c) 
- o comando SHOW não funciona com o nome das tabelas criadas e sim com o TABLES ou DATABASES, para ver a tabela especificamente devemos usar o comando DESCRIBE nome_da_tabela;

## Exercício 2

### a)

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
)
```

### b) 

Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
O erro corresponde a tentativa de inserir novos valores com uma PRIMARY KEY, que no nosso caso é o id, já existente.

### c) 

Error Code: 1136. Column count doesn't match value count at row 1
Erro diz que a contagem de colunas não corresponde a contagem de valores passados na linha 1. Pois no INSERT INTO Actors, definimos apenas as colunas (id, name, salary) e passamos valores para todas as colunas da tabela.

Query correta:
```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

### d) 


*Error Code: 1364. Field 'name' doesn't have a default value*
Erro diz que o campo "name" não possui nenhum valor.
Como a coluna name tem uma resstrição NOT NULL é necessário que algum valor seja passado. 

Query correta:

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Selton Mello"
  400000,
  "1949-04-18", 
  "male"
);
```

### e)

*Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1*
Formato da coluna birth_date não está correto, a data de nascimento é um VARCHAR (string) portanto estão faltando as aspas

Query correta: 

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### f)

```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("006", "Matheus Nachtergaele", 300000, "1968-01-03", "male"),
	  ("007", "Sonia Braga", 1300000, "1950-06-08", "female");
```

## Exercício 3

### a) 
` SELECT * FROM Actor WHERE gender = "female" `

### b) 
` SELECT salary FROM Actor WHERE name = "Tony Ramos" `

### c) 
` SELECT * FROM Actor WHERE gender = "invalid" `
Nenhuma linha foi retornada pois na tabela não existe nenhum ator ou atriz onde o genero foi passado como "invalid"

### d) 
` SELECT id, name, salary FROM Actor WHERE salary <= 500000 `

### e) 
*Error Code: 1054. Unknown column 'nome' in 'field list'*
Na query foi passado "nome", que não corresponde a nenhum campo da tabela, o correto seria "name"

Query correta:

` SELECT id, name from Actor WHERE id = "002" `

## Exercício 4
 
### a) 
A query busca por todas as linhas da tabela e procura nas colunas name, nomes que começem com A ou J e na coluna salary por um valor maior que 300000, se as duas condições forem satisfeitas ela retorna as linhas encontradas.

### b)

` SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000 `

### c) 

` SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%" `

### d)

```sh
 SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000 
```

## Exercício 5

### a) 
```sh
CREATE TABLE Movies (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) UNIQUE NOT NULL,
  synopsis TEXT NOT NULL,
  release_date DATE NOT NULL,
  raitings FLOAT NOT NULL
  )
```
Tabela Movies, todas as colunas terão que ter valor (NOT NULL), title tem ainda a restrição UNIQUE para evitar nomes repetidos, sinopse do filme é um TEXT (sem limite de caractéres), data de lançamento (DATE) e a avaliação um número FLOAT que receberá valores de 1 a 10.

## Exercício 6

### a) 
` SELECT id, title, rating from Movies WHERE id = "003" `

### b)
` SELECT * FROM Movies WHERE title = "O Cheiro do Ralo" `

### c) 
` SELECT id, title, synopsis FROM Movies WHERE rating >= 7 `

## Exercício 7

### a)
` SELECT * FROM Movies WHERE title LIKE "%vida%" `

### b) 
` SELECT * FROM Movies WHERE title LIKE "%ralo%" OR synopsis LIKE "%casamento%"  `

### c)
`SELECT * FROM Movies WHERE release_date < "2020-08-11" `

### d)
```sh
SELECT * FROM Movies 
WHERE (release_date < "2020-08-11") AND
      (title LIKE "%amor%" OR synopsis LIKE "%casada%") AND rating > 7
```




