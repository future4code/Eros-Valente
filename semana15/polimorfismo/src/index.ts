import { Client } from "./Client"

const client: Client = {
    name: "José",
    registrationNumber: Date.now(),
    consumedEnergy: 200,

    calculateBill: () => 2
}

// 1 a) Todas as propriedades podem ser acessadas e impressas pois interfaces não possuem encapsulamento, tudo é publico.