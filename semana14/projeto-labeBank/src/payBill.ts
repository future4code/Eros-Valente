import moment from "moment"
import { getAllAccounts } from "./accounts"
import { writeToDatabase } from "./index"
import { Account, Transaction, TransactionsEnum } from "./types"

var colors = require('colors/safe')

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


