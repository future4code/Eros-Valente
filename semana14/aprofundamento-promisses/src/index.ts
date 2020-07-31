// import axios from "axios"
// import { resolve } from "path"
// // exercicio 1

// // a) o GET /subscribers/all cujo a url é https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all

// // b) Promise<any[]>

// // exercício 3

// // a) Nenhum erro é indicado, mas temos que tomar cuidado pois o retorno do get do axios é uma Promise<any>, se mudarmos o endpoint que retorne outros dados que não aquele explicito da tipagem o Typescript não vai acusar erro.

// // b) Fazendo o mapeamento do resultado da Promise de retorno garantimos que o resultado será estruturado exatamente de acordo com o que precisamos, que já foi previamente tipado.

// const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

// type User = {
//     id: string,
//     name: string,
//     email: string
// }
// const getSubscribes = async (): Promise<User[]> => {
//     try{
//         const users = await axios.get(`${baseUrl}/subscribers/all`)
//         return users.data.map((response: any) => {
//             return {
//                 id: response.id,
//                 name: response.name,
//                 email: response.email
//             }
//         })
//     } catch (error) {
//         console.log(error.message)
//         return []
//     }
    
// }

// const main = async () => {
//     const users = await getSubscribes()
//     console.log(users)
// }

// // exercício 4

// // a) o tipo da função é uma Promise<void> pois como o método axios utilizado nela é o put ela não irá retornar nada, apenas enviar dados.

// // b)

// const createNews = async (
//     title: string,
//     content: string,
//     date: number
// ):Promise<void> => {
//     try{
//         await axios.put(`${baseUrl}/news`, {
//             title: title,
//             content: content,
//             date: date,
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// // exercício 5

// // a) nenhum métodos de array foi feito para se mexer com funções assíncronas, portanto ao utilizar um forEach alguns problemas podem acabar aparecendo, então no caso de rodar funções assincronas em loop o ideal é que se use um for.

// // exercício 6

// // a) ele permite que varias Promises sejam feitas paralelamente, dessa forma as requisições serão feitas independente da anterior ter terminado ou não.

// // b) ele gerará um array de Promises de envio de notificações, para depois enviar todas.

// // c)
// const sendNotification = async (users: User[], message: string): Promise<void> => {
//     const promiseArray: Promise<any>[] = []
//     for (const user of users) {
//         promiseArray.push(
//             axios.post(`${baseUrl}/notifications/send`, {
//                 subscriberId: user.id,
//                 message: message
//             })
//         )    
//     }

//     await Promise.all(promiseArray)
// }

// // exercício 7

// // a) 

// const createSubscriber = async (name: string, email: string) => {
//     await axios.put(`${baseUrl}/subscribers`, {
//         name: name,
//         email: email
//     })
// }

// // b)

// const createAndSendNotifications = async (title: string, content: string, date: number, message: string) => {
//     try {
//         await createNews(title, content, date)
    
//         const users = await getSubscribes()
//         await sendNotification(users, message)
        
//         console.log("Notícia criada com sucesso e notificações enviadas.")

//     } catch (error) {
//         console.log("erro", error.message)
//     }
// }

// // c)

// const getAllNotifications = async (): Promise<any> => {
//     const users = await getSubscribes()

//     const notificationPromises: Promise<any>[] = []
    
//     try {
//         for (let user of users) {
//             notificationPromises.push(
//                 axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)    
//             )
//         }

//         const result: any[] = await Promise.all(notificationPromises)

//         const dataFromResult: any[] = result.map(res => res.data) 
    
//         return dataFromResult
    
//     } catch (error) {
//         console.log(error)
//     }
// }

// DESAFIO

const asyncHello = async (): Promise<void> => {
    const promiseResponse = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Oi")
        }, 5000)
    })
    console.log(promiseResponse) 
}



