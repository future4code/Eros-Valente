export enum TransactionsEnum {
    ADD_BALANCE = "Depósito",
    PAY_BILL = "Pagamento",
    TRANSFER = "Transferência"    
}


export type Account = {
    name: string,
    cpf: number,
    dateOfBirth: string,
    balance: number,
    accountStatement: Transaction[] 
}

export type Transaction = {
    type: TransactionsEnum
    value: number,
    date: number
    description: string,
    completed: boolean
}