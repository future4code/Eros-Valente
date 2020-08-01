import moment from "moment"
import { getAllAccounts } from "./accounts"
import { writeToDatabase } from "./index"
import { Account, Transaction, TransactionsEnum } from "./types"

var colors = require('colors/safe')

const getBalance = (name: string, cpf: string): void => {
    const accountsArray: Account[] = getAllAccounts()
    
    const accountIndex: number = accountsArray.findIndex(
        (costumer => costumer.name === name && costumer.cpf === Number(cpf)) 
    )
   
    if (accountIndex !== -1) {
        const balance: number = accountsArray[accountIndex].balance
        console.log(`Conta de ${accountsArray[accountIndex].name}\nSaldo: ${balance}`)
        return
    } else {
        console.log(colors.red("Dados inválidos"))
        return
    }

}

const addBalance = (name: string, cpf: string, amount: string): void => {
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
        amount: Number(amount),
        date: moment().unix(),
        description: "Depósito em dinheiro",
        completed: true,
    }

    accountsArray[accountIndex].accountStatement.push(transaction)
    accountsArray[accountIndex].balance += transaction.amount

    writeToDatabase(accountsArray)

    console.log(colors.green("Depósito realizado com sucesso"))
}

