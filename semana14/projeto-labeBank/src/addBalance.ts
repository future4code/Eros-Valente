import moment from "moment"
import { getAllAccounts } from "./getAllAccounts"
import { writeToDatabase } from "./index"
import { Account, Transaction, TransactionsEnum } from "./types"

var colors = require('colors/safe')

export const addBalance = (name: string, cpf: string, value: string): void => {
    const accountsArray: Account[] = getAllAccounts()
    
    const accountIndex: number = accountsArray.findIndex(
        (costumer => costumer.name === name && costumer.cpf === Number(cpf)) 
    )
    
    if (accountIndex === -1) {
        console.log(colors.red("Dados inválidos"))
        return
    } 

    const transaction: Transaction = {
        type: TransactionsEnum.ADD_BALANCE,
        value: Number(value),
        date: moment().unix(),
        description: "Depósito em dinheiro",
        completed: true,
    }

    accountsArray[accountIndex].accountStatement.push(transaction)
    accountsArray[accountIndex].balance += transaction.value

    writeToDatabase(accountsArray)

    console.log(colors.green("Depósito realizado com sucesso"))
}

