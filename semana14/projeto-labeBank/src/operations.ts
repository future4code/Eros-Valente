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

const addBalance = (name: string, cpf: string, value: string): void => {
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

const payBill = (cpf: string, description: string, value: string, date?: string): void => {
    const accountsArray = getAllAccounts()

    const accountIndex: number = accountsArray.findIndex(
        (costumer => costumer.cpf === Number(cpf)) 
    )
    
    if (accountIndex === -1) {
        console.log(colors.red("Dados inválidos"))
        return
    }     

    if (moment(date, "DD/MM/YYYY").unix() < moment().unix()) {
        console.log(colors.red("Data inválida, deve ser maior do que a data atual"))
        return
    }


    if (Number(value) > accountsArray[accountIndex].balance) {
        console.log(colors.red("Saldo insuficiente"))
        return
    }

    const transaction: Transaction = {
        type: TransactionsEnum.PAY_BILL,
        value: Number(value),
        date: date ? moment(date, "DD/MM/YYYY").unix() : moment().unix(),
        description: description,
        completed: false,
    }

    accountsArray[accountIndex].accountStatement.push(transaction)

    writeToDatabase(accountsArray)

    if (date) {
        console.log(colors.green("Agendamento de pagamento realizado com sucesso!"))
    } else {
        console.log(colors.green("Pagamento realizado"))
    }    
}

