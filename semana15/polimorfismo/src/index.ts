import { Client } from "./Client"
import { Place } from "./Place"
import { Residence } from "./Residence"
import { Commerce } from "./Commerce"
import { Industry } from "./Industry"

const client: Client = {
    name: "José",
    registrationNumber: Date.now(),
    consumedEnergy: 200,

    calculateBill: () => 2
}

// 1 a) Todas as propriedades podem ser acessadas e impressas pois interfaces não possuem encapsulamento, tudo é publico.

// 2 a) O typescript retorna o erro "Cannot create an instance of an abstract class." 
// 2 b) As classes filhas da classe abstrata devem implementar os atributos e metodos da classe abstrata. Deve-se então criar uma instancia dessa classe filha

// 3 )

const home: Residence = new Residence(4, "09510-021")
const store: Commerce = new Commerce(2, "08717-000")
const factory: Industry = new Industry(15, "98765-010")

console.log("Cep home: ", home.getCep())
console.log("Cep store: ", store.getCep())
console.log("Cep factory: ", factory.getCep())

console.log("nº de moradores de home ", home.getResidentsQuantity())
console.log("nº de moradores de home ", store.getFloorsQuantity())
console.log("nº de moradores de home ", factory.getMachinesQuantity())

// 4 a) 
//        propriedade: herdados de Client: name, registrationNumber, consumedEnergy
//                   herdado de Place: cep
//                   herdado de Residence: residentsQuantity
//                   exclusivo da ResidentialClient: cpf
//     
//     metodos:     herdados de Client: calculateBill
//                  herdado de Place: getCep
//                  herdado de Residence: getResidentsQuantity
//                  exclusivo da ResidentialClient: getCpf

