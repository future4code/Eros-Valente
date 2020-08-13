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

```ts
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender
        const countByGender = await countActorsByGender(gender as string)
        res.status(200).send({
            quantity: countByGender
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }           
})     
```
----------
 ## Exercício 4

 #### a)
 ```ts
 app.put("/actor", async (req: Request, res: Response) => {
    try {
        await updateSalary(req.body.id, req.body.salary)
        res.status(200).send({
            message: "Success",
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
        })
    }
})
```

#### b)
```ts
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).send({
            message: "Successfully deleted",
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
        }) 
    }
})
```
----

## Exercício 5

#### a)

> função banco de dados
```ts
const createMovie = async (
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    rating: number,
    playingLimitDate: Date    
): Promise<void> => {
    await connection
        .insert({
            id,
            title,
            synopsis,
            release_date: releaseDate,
            rating,
            playing_limit_date: playingLimitDate
        })
        .into("Movies")
}
```

> Função express
```ts
app.post("/movie", async (req: Request, res: Response) => {
    try {
        await createMovie(
            req.body.id,
            req.body.title,
            req.body.synopsis,
            req.body.release_date,
            req.body.rating,
            req.body.playing_limit_date
        )
        res.status(200).send({
            message: "Success"
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})
```

------
## Exercício 6

> Função banco de dados

```ts
const getAllMovies = async (): Promise<any> => {
    const result = await connection("Movies")
        .select("*")
        .limit(15)
    
    return result
}
```

> Função express (endpoint)

```ts 
app.get("/movie", async (req: Request, res: Response) => {
    try {
        const movies = await getAllMovies()
        res.status(200).send({
            movies: movies,
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})
```
----

## Exercício 7

> Função query

```ts
const searchMovie = async (searchTerm: string): Promise<any> => {
    const result = await connection("Movies")
        .select("*")
        .where("title", "LIKE", `%${searchTerm}%`)
        .orWhere("synopsis", "LIKE", `%${searchTerm}%`)
        .orderBy("release_date", "asc")
        
    return result    
}
```

> Função express (endpoint)
```ts
app.get("/movie/search", async (req: Request, res: Response) => {
    try {
        const movies = await searchMovie(req.query.searchTerm as string)
        res.status(200).send({
            movies: movies
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })    
    }
})
```
     
