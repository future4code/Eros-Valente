import moment from "moment"
import { getAllAccounts } from "./getAllAccounts"
import { writeToDatabase } from "./index"
import { TransactionsEnum } from "./types"

var colors = require('colors/safe')

export const updateBalance = (): void => {
    const accountsArray = getAllAccounts()

    for (let account of accountsArray) {
        account.accountStatement.forEach((transaction) => {
            if (transaction.date <= moment().unix() && transaction.completed === false) {
                transaction.completed = true
                if(transaction.type === TransactionsEnum.TRANSFER_MADE) {
                    account.balance -= transaction.value
                } else if (transaction.type === TransactionsEnum.TRANSFER_RECIEVED) {
                    account.balance += transaction.value
                }
            }
        })
    }

    writeToDatabase(accountsArray)
    
    console.log(colors.green("Saldos atualizados com sucesso"))
}

