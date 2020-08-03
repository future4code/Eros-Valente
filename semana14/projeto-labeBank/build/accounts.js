"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAccounts = void 0;
const index_1 = require("./index");
const moment_1 = __importDefault(require("moment"));
var colors = require('colors/safe');
exports.getAllAccounts = () => {
    const accountsArray = index_1.readDatabase();
    return accountsArray.map((response) => {
        return {
            name: response.name,
            cpf: response.cpf,
            dateOfBirth: response.dateOfBirth,
            balance: response.balance,
            accountStatement: response.accountStatement
        };
    });
};
const createAccount = (name, cpf, dateOfBirth) => {
    const accountsArray = exports.getAllAccounts();
    console.log(accountsArray);
    const accountIndex = accountsArray.findIndex((costumer => costumer.cpf === Number(cpf)));
    if (accountIndex !== -1) {
        console.log(colors.red("CPF já cadastrado"));
        return;
    }
    if (!name || !cpf || !dateOfBirth) {
        console.log(colors.red("Por favor, informe nome, cpf e data de nascimento do cliente."));
        return;
    }
    if (dateOfBirth !== (moment_1.default(dateOfBirth, "DD/MM/YYYY").format("DD/MM/YYYY"))) {
        console.log(colors.red("O formato da data de nascimento deve ser DD/MM/YYYY"));
        return;
    }
    if (moment_1.default().diff(moment_1.default(dateOfBirth, "DD/MM/YYYY"), "year") < 18) {
        console.log(colors.red("Cliente precisa ser maior de 18 anos"));
        return;
    }
    accountsArray.push({
        name: name,
        cpf: Number(cpf),
        dateOfBirth: dateOfBirth,
        balance: 0,
        accountStatement: []
    });
    index_1.writeToDatabase(accountsArray);
    console.log("Conta criada com sucesso.");
};
