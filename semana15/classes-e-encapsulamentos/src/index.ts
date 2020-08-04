import { Post } from './Post'
import { JSONFileManager } from './JSONFileManager'

//  Receber os parâmetros do terminal
const newPostAuthor: string = process.argv[2]
const newPostText: string = process.argv[3]

//  Criar um novo post com os dados recebidos
const newPost: Post = new Post(newPostAuthor, newPostText)

//  Ler a base de dados
const fileManager: JSONFileManager = new JSONFileManager('posts.json')
const postList: any = fileManager.readDatabase()

//  Atualizar a base de dados
postList.push(newPost)

//  Salvar as atualizações
fileManager.writeToDatabase(postList)

//  Imprimir mensagem de sucesso
console.log("Sucesso!")