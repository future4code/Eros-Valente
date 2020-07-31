import { writeToDatabase, readDatabase } from "./index"
import moment from "moment"

var colors = require('colors/safe')

type account = {
    name: string,
    cpf: number,
    dateOfBirth: string,
    balance: number,
    accountStatement: transactions[] 
}

type transactions = {
    value: number,
    date: moment.Moment,
    description: string
}

const createAccount = (name: string, cpf: string, dateOfBirth: string): void => {
    let accountsArray: account[] = readDatabase()

    if (!name || !cpf || !dateOfBirth) {
        console.log(colors.red("Por favor, informe nome, cpf e data de nascimento do cliente."))
        return
    }
    
    if(dateOfBirth !== (moment(dateOfBirth, "DD/MM/YYYY").format("DD/MM/YYYY"))) {
        console.log(colors.red("O formato da data de nascimento deve ser DD/MM/YYYY"))
        return
    }

    if (moment().diff(moment(dateOfBirth, "DD/MM/YYYY"), "year") < 18) {
        console.log(colors.red("Cliente precisa ser maior de 18 anos"))
        return
    }
    
    try {
        
        accountsArray.push(
            {
                name: name,
                cpf: Number(cpf),
                dateOfBirth: dateOfBirth,
                balance: 0,
                accountStatement: [] 
            }
        )
        writeToDatabase(accountsArray)
        console.log("Conta criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar nova conta")
    }
} 

createAccount(process.argv[2], process.argv[3], process.argv[4])
