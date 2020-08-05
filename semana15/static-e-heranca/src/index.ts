import { User } from "./User"
import { Customer } from "./Customer"
import { Employee } from "./Employee"

// 1 a) caso a nova instancia esteja tipada de acordo com a classe, ou sem tipo não daria pra acessar a propriedade password pois ela é privada, e além disso a classe User não possui nenhum método que retorne o password

// 1 b) Uma vez apenas.

// const user1: User = new User("1", "email@email.com", "João", "senha_super_segura")

// 2 a) Mensagem impressa uma vez no terminal.

// 2 b) Mensagem impressa uma vez no terminal. O super da classe Costumer convoca o construtor da classe pai User.

// const costumer1: Customer = new Customer("2", "jose@email.com", "José", "password_muito_seguro", "123456")

// 3 a) Não, pois a propriedade password é definida como private e não existe nenhum método na classe User que nos possibilite acessar o dado.

// console.log(`id: ${costumer1.getId()} \nemail: ${costumer1.getEmail()} \nname: ${costumer1.getName()} \ncredit card: ${costumer1.getCreditCard()}`)

// 4 e 5
// console.log(costumer1.introduceYourself())

// 6 a) Uma vez, pois o super convoca o construtor da classe pai User

const employee1: Employee = new Employee("10", "joão@email.com", "João", "0000000", new Date("01/01/1980"), 2000)

console.log(`id: ${employee1.getId()} \nEmail: ${employee1.getEmail()} \nName: ${employee1.getName()} \nAdmission date: ${employee1.getAdmissionDate()} \nBase salary: ${employee1.getBaseSalary()}`)