## Exercício 1

#### a)
A resposta vem em um array com outros dois arrays dentro, o primeiro contêm de fato o resultado da query e o segundo contêm informações da query. 

#### b)
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

#### c)
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