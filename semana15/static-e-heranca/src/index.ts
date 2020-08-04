import { User } from "./User"
import { Customer } from "./Customer"

// 1 a) caso a nova instancia esteja tipada de acordo com a classe, ou sem tipo não daria pra acessar a propriedade password pois ela é privada, e além disso a classe User não possui nenhum método que retorne o password

// 1 b) Uma vez apenas.

// const user1: User = new User(String(Date.now() * Math.random()), "email@email.com", "João", "senha_super_segura")

// 2 a) Mensagem impressa uma vez no terminal.

// 2 b) Mensagem impressa uma vez no terminal. O super da classe Costumer convoca o construtor da classe pai User.

// const user2: Customer = new Customer("8394030494", "user2@email.com", "sem nome", "passwor_nao_muito_seguro", "123456")



