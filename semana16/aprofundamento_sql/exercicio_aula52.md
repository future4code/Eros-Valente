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

