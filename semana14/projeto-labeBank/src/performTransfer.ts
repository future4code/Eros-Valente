import moment from "moment"
import { getAllAccounts } from "./getAllAccounts"
import { writeToDatabase } from "./index"
import { Account, Transaction, TransactionsEnum } from "./types"

var colors = require('colors/safe')

export const performTransfer = (
    senderName:string,
    senderCpf: string, 
    recieverName: string, 
    recieverCpf: string, 
    value: string,
    description: string,
    date?: string
    ): void => {
    const accountsArray: Account[] = getAllAccounts()

    const senderAcountIndex: number = accountsArray.findIndex(
        (costumer => costumer.name === senderName && costumer.cpf === Number(senderCpf)) 
    )

    const recieverAccountIndex: number = accountsArray.findIndex(
        (costumer => costumer.name === recieverName && costumer.cpf === Number(recieverCpf))
    )
    // validação de existencia das contas
    if (senderAcountIndex === -1 || recieverAccountIndex === -1) {
        console.log(colors.red("Dados do cliente inválidos"))
        return
    }
    
    // validação de data
    if (date && (moment(date, "DD/MM/YYYY").unix() < moment().unix())) {
        console.log(colors.red("Data inválida, deve ser maior do que a data atual"))
        return
    }

    // validação de saldo
    if (accountsArray[senderAcountIndex].balance < Number(value) || accountsArray[senderAcountIndex].balance === 0) {
        console.log(colors.red("Saldo insuficiente"))
        return
    }

    const senderTransaction: Transaction = {
        type: TransactionsEnum.TRANSFER_MADE,
        value: Number(value),
        date: date ? moment(date, "DD/MM/YYYY").unix() : moment().unix(),
        description: `${description} (para: ${recieverName} | CPF: ${recieverCpf})`,
        completed: false,
    }

    accountsArray[senderAcountIndex].accountStatement.push(senderTransaction)

    const recieverTransaction: Transaction = {
        type: TransactionsEnum.TRANSFER_RECIEVED,
        value: Number(value),
        date: date ? moment(date, "DD/MM/YYYY").unix() : moment().unix(),
        description: `${description} (de: ${senderName} | CPF: ${senderCpf})`,
        completed: false,
    }

    accountsArray[recieverAccountIndex].accountStatement.push(recieverTransaction)

    writeToDatabase(accountsArray)

    if (date) {
        console.log(colors.green("Transferência agendada com sucesso"))
    } else {
        console.log(colors.green("Transferência realizada com sucesso"))
    }    
}
