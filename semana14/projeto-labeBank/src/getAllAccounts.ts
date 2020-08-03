import { readDatabase } from "./index"
import { Account } from "./types"

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