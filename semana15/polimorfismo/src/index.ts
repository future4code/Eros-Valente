import { Client } from "./Client"
import { Place } from "./Place"

const client: Client = {
    name: "José",
    registrationNumber: Date.now(),
    consumedEnergy: 200,

    calculateBill: () => 2
}

// 1 a) Todas as propriedades podem ser acessadas e impressas pois interfaces não possuem encapsulamento, tudo é publico.

// 2 a) O typescript retorna o erro "Cannot create an instance of an abstract class." 
// 2 b) As classes filhas da classe abstrata devem implementar os atributos e metodos da classe abstrata.

