import { User } from "./User"
import { Customer } from "./Customer"

// 1 a) caso a nova instancia esteja tipada de acordo com a classe, ou sem tipo não daria pra acessar a propriedade password pois ela é privada, e além disso a classe User não possui nenhum método que retorne o password

// 1 b) Uma vez apenas.

const user1: User = new User("1", "email@email.com", "João", "senha_super_segura")

// 2 a) Mensagem impressa uma vez no terminal.

// 2 b) Mensagem impressa uma vez no terminal. O super da classe Costumer convoca o construtor da classe pai User.

const costumer: Customer = new Customer("2", "jose@email.com", "José", "password_muito_seguro", "123456")

// 3 a) Não, pois a propriedade password é definida como private e não existe nenhum método na classe User que nos possibilite acessar o dado.

// console.log(`id: ${user2.getId()} \nemail: ${user2.getEmail()} \nname: ${user2.getName()} \ncredit card: ${user2.getCreditCard()}`)

// 4 
console.log(costumer.introduceYourself())

