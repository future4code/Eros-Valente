import { User } from "./User"
import { Customer } from "./Customer"
import { Employee } from "./Employee"
import { Seller } from "./Seller"
 
// 1 a) caso a nova instancia esteja tipada de acordo com a classe, ou sem tipo não daria pra acessar a propriedade password pois ela é privada, e além disso a classe User não possui nenhum método que retorne o password

// 1 b) Uma vez apenas.

// const user1: User = new User("1", "email@email.com", "João", "senha_super_segura")

// 2 a) Mensagem impressa uma vez no terminal.

// 2 b) Mensagem impressa uma vez no terminal. O super da classe Costumer convoca o construtor da classe pai User.

// const costumer1: Customer = new Customer("2", "jose@email.com", "José", "password_muito_seguro", "123456")

// 3 a) Não, pois a propriedade password é definida como private e não existe nenhum método na classe User que nos possibilite acessar o dado.

// console.log(`id: ${costumer1.getId()} \nemail: ${costumer1.getEmail()} \nname: ${costumer1.getName()} \ncredit card: ${costumer1.getCreditCard()}`)

// 4 e 5
// console.log("Exercício 5 - b) \n", costumer1.introduceYourself())

// 6 a) Uma vez, pois o super convoca o construtor da classe pai User

// 6 b) Todos os dados passados menos password que é um dado privado e sem método criado para acessá-lo
// const employee1: Employee = new Employee("10", "joão@email.com", "João", "0000000", new Date("01/01/1980"), 2000)

// console.log(`Exercicio 6 - b) \nid: ${employee1.getId()} \nEmail: ${employee1.getEmail()} \nName: ${employee1.getName()} \nAdmission date: ${employee1.getAdmissionDate()} \nBase salary: ${employee1.getBaseSalary()}`)

// 7)
//console.log("Exercício 7 \nSalário total:", employee1.calculateTotalSalary().toFixed(2))

// 8 a)
const seller1: Seller = new Seller("123", "seller1@email.com", "Teddy", "0987", new Date("01/02/2000"), 1500)

// 8 b) foi possível imprimir todas as propriedades da classe Employee menos password que é uma propriedade privada da classe User, pai da classe Customer, portando a classe Seller herda essas caracteristicas.

console.log(`Exercício 8 - b) \nid: ${seller1.getId()} \nEmail: ${seller1.getEmail()} \nName: ${seller1.getName()} \nAdmission date: ${seller1.getAdmissionDate()} \nBase salary: ${seller1.getBaseSalary()}`)

// 9 a) Sim, pois foi criado um método publico para nos retornar essa propriedade que está como privada dentro da classe Seller

seller1.setSalesQuantity(5)

console.log(seller1.getSalesQuantity())

seller1.setSalesQuantity(5)


console.log(seller1.getSalesQuantity())


console.log(seller1.calculateTotalSalary())

