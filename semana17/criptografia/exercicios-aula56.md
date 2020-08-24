## Exercício 1

### a) 
Round é o nome que a lib brcryptjs dá ao cost, o cost está rwelacionado com o tempo de execução do algoritmo. Utilizarei o valor de 12 por ser o padrão da lib.

Salt é uma string aleatória concatenada à senha para garantir entre outras coisas que o hash gerado sempre seja diferente, mesmo que a senha passada seja igual.

## Exercício 2

### a)
Primeiro devemos modificar o singup pois é ele que cadastra a senha no banco, o login apenas irá comparar a senha fornecida com a que está salva no banco.



