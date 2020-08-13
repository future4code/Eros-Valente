## Exercício 1

### a)
A resposta vem em um array com outros dois arrays dentro, o primeiro contêm de fato o resultado da query e o segundo contêm informações da query. 

----------

### b)
usando queryBuilder (no código que está no index.ts usei raw)
```ts
const searchActor = async (name: string): Promise<any> => {
    try {
        const result = await connection
            .select("*")
            .from("Actor")
            .where({name})
           
        console.log(result[0])
        return result[0]
    } catch (error) {
        console.log(error)
    }
}
```
----------

### c)
Com queryBuilder (no código que está no index.ts usei raw)
```ts
const countActorsByGender = async (gender: string): Promise<any>=> {
    try { 
        const result = await connection("Actor")
            .count("* as quantity")
            .where({gender})
        
            console.log(result[0].quantity)
            return result[0].quantity    
    } catch (error) {
        console.log(error)
    }
}
```
-----------

## Exercício 2

### a)
```ts
const updateSalary = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({salary})
        .where("id", id)
    
    console.log("Salário atualizado")    
}
```
-----------

### b)
```ts
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id)  
}
```
----------

### c)
```ts
const averageSalaryByGender = async (gender: string): Promise<number> => {
    const result = await connection("Actor")
        .avg("salary as salaryAverage")
        .where({gender})   

    console.log(result[0].salaryAverage)  
    return result[0].salaryAverage  
}
```
-----------

## Exercício 3

### a)
A url do endpoint tem id como parâmetro portanto portanto para usarmos o id passado na url usamos o req.params.id e guardamos esse valor na constante id que será utilizada como parâmetro da função  getActorById

----------

### b)
> res.status(200).send(actor)

Essa linha do bloco do try informa que o status da requisição foi 200, portanto, que a requisição teve sucesso, e envia como resposta o dado guardado na variável actor.

> res.status(400).send({ message: err.message, })

Essa linha do bloco catch indica o status como 400, portanto, que houve um erro na requisição e então envia a mensagem de erro.

---

### c)

    
     
