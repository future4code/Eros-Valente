import { writeToDatabase, readDatabase } from "./index"
import { Account } from "./types"
import moment from "moment"

var colors = require('colors/safe')

export const getAllAccounts = (): Account[] => {
    const accountsArray: Account[] = readDatabase()
    return accountsArray.map((response: any): Account => {
        return {
            name: response.name,
            cpf: response.cpf,
            dateOfBirth: response.dateOfBirth,
            balance: response.balance,
            accountStatement: response.accountStatement
        }
    })
}



const createAccount = (name: string, cpf: string, dateOfBirth: string): void => {
    const accountsArray: Account[] = getAllAccounts()
    console.log(accountsArray)
    const accountIndex: number = accountsArray.findIndex(
        (costumer => costumer.cpf === Number(cpf)) 
    )

    // checagem de cpf já cadastrado
    if (accountIndex !== -1) {
        console.log(colors.red("CPF já cadastrado"))
        return
    }

    // checagem para garantir que todos os dados foram passados
    if (!name || !cpf || !dateOfBirth) {
        console.log(colors.red("Por favor, informe nome, cpf e data de nascimento do cliente."))
        return
    }

    // checagem de maioridade  
    if(dateOfBirth !== (moment(dateOfBirth, "DD/MM/YYYY").format("DD/MM/YYYY"))) {
        console.log(colors.red("O formato da data de nascimento deve ser DD/MM/YYYY"))
        return
    }

    // checagem de formato de data
    if (moment().diff(moment(dateOfBirth, "DD/MM/YYYY"), "year") < 18) {
        console.log(colors.red("Cliente precisa ser maior de 18 anos"))
        return
    }
    
    accountsArray.push(
        {
            name: name,
            cpf: Number(cpf),
            dateOfBirth: dateOfBirth,
            balance: 0,
            accountStatement: []
        }
    )
    
    writeToDatabase(accountsArray)
    console.log("Conta criada com sucesso.")
}
