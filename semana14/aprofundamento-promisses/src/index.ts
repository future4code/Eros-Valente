import axios from "axios"
// exercicio 1

// a) o GET /subscribers/all cujo a url é https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all

// b) Promise<any[]>

// exercício 3

// a) Nenhum erro é indicado, mas temos que tomar cuidado pois o retorno do get do axios é uma Promise<any>, se mudarmos o endpoint que retorne outros dados que não aquele explicito da tipagem o Typescript não vai acusar erro.

// b) Fazendo o mapeamento do resultado da Promise de retorno garantimos que o resultado será estruturado exatamente de acordo com o que precisamos, que já foi previamente tipado.

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

type User = {
    id: string,
    name: string,
    email: string
}

const getSubscribes = async (): Promise<User[]> => {
    try{
        const users = await axios.get(`${baseUrl}/subscribers/all`)
        return users.data.map((response: User) => {
            return {
                id: response.id,
                name: response.name,
                email: response.email
            }
        })
    } catch (error) {
        console.log(error.message)
        return []
    }
    
}

const main = async (): Promise<void> => {
        const asyncResponse = await getSubscribes()
        console.log(asyncResponse)
}
    
main()

// exercício 4

// a) o tipo da função é uma Promise<void> pois como o método axios utilizado nela é o put ela não irá retornar nada, apenas enviar dados.

// b)

const createNews = async (
    title: string,
    content: string,
    date: number
):Promise<void> => {
    try{
        await axios.put(`${baseUrl}/news`, {
            title: title,
            content: content,
            date: date,
        })
    } catch (error) {
        console.log(error)
    }
}



