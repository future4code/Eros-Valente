import moment from "moment"
import { getAllAccounts } from "./getAllAccounts"
import { writeToDatabase } from "./index"

var colors = require('colors/safe')

export const updateBalance = (): void => {
    const accountsArray = getAllAccounts()

    for (let account of accountsArray) {
        account.accountStatement.forEach((transaction) => {
            if (transaction.date <= moment().unix() && transaction.completed === false) {
                transaction.completed = true
                account.balance -= transaction.value
            }
        })
    }

    writeToDatabase(accountsArray)
    
    console.log(colors.green("Saldos atualizados com sucesso"))
}

updateBalance()