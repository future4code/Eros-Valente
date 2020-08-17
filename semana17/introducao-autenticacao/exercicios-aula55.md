## EXERCÍCIO 1

### a)

Não se faz operações aritiméticas com id's, portanto id's serem números não têm sentido semântico.

Outro motivo, sendo strings a possibilidade de gerar id's únicos e não tão grandes é maior, tendo em vista que uma string aceita qualquer caractér.

### b)
código na pasta services

## Exercício 2

### a)

No código a variável userTableName guarda o nome da tabela do banco de dados.

A variável connection possui as configurações necessárias para nosso código fazer a conexão com o Mysql.

Por último a função creatoruser faz a comunicação externa com o banco de dados e usando Query Builder insere na tabela User os valores do id, email e senha, passados como parâmetros. 

### b)
```sql
CREATE TABLE User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)
```

### c)




