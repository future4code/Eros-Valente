import * as fs from 'fs'
import { createAccount } from "./createAccount"
import { addBalance } from "./addBalance"
import { getBalance } from "./getBalance"
import { payBill } from "./payBill"
import { updateBalance } from "./updateBalance"
import { performTransfer } from "./performTransfer"


export function readDatabase(): any {
    try {
        const fileData: string = fs.readFileSync('./data.json').toString()
        return JSON.parse(fileData)
        
    } catch (error) {
        console.log("Erro ao ler a base de dados :" + error.message)
        return []
    }
}

export function writeToDatabase(data: any): void {
    try {
        const dataAsString: string = JSON.stringify(data, null, 2)
        fs.writeFileSync('./data.json', dataAsString)
    } catch (error) {
        console.log("Erro ao salvar os dados: " + error.message)
    }
}

const main = (args: string[]): void => {
    switch (args[2]) {
        case "create":
            createAccount(args[3], args[4], args[5])          
            break;
        case "deposit":
            addBalance(args[3], args[4], args[5])          
            break;
        case "balance":
            getBalance(args[3], args[4])          
            break;
        case "pay":
            payBill(args[3], args[4], args[5])          
            break;
        case "transfer":
            performTransfer()


        case "update":
            updateBalance()          
            break;
                                            
        default:
            break;
    }
}

main(process.argv)