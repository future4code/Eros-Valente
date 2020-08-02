import moment from "moment"
import { getAllAccounts } from "./getAllAccounts"
import { writeToDatabase } from "./index"
import { Account, Transaction, TransactionsEnum } from "./types"

var colors = require('colors/safe')

export const performTransfer = (senderName:string, senderCpf: string, recieverName: string, recieverCpf: string, value: string): void => {
    const accountsArray: Account[] = getAllAccounts()

    const accountIndex: number = accountsArray.findIndex(
        (costumer => costumer.name === name && costumer.cpf === Number(cpf)) 
    )

    




}