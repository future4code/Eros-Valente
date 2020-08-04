"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const accounts_1 = require("./accounts");
const index_1 = require("./index");
const types_1 = require("./types");
var colors = require('colors/safe');
const getBalance = (name, cpf) => {
    const accountsArray = accounts_1.getAllAccounts();
    const accountIndex = accountsArray.findIndex((costumer => costumer.name === name && costumer.cpf === Number(cpf)));
    if (accountIndex !== -1) {
        const balance = accountsArray[accountIndex].balance;
        console.log(`Conta de ${accountsArray[accountIndex].name}\nSaldo: ${balance}`);
        return;
    }
    else {
        console.log(colors.red("Dados inválidos"));
        return;
    }
};
const addBalance = (name, cpf, value) => {
    const accountsArray = accounts_1.getAllAccounts();
    const accountIndex = accountsArray.findIndex((costumer => costumer.name === name && costumer.cpf === Number(cpf)));
    if (accountIndex === -1) {
        console.log(colors.red("Dados inválidos"));
        return;
    }
    const transaction = {
        type: types_1.TransactionsEnum.ADD_BALANCE,
        value: Number(value),
        date: moment_1.default().unix(),
        description: "Depósito em dinheiro",
        completed: true,
    };
    accountsArray[accountIndex].accountStatement.push(transaction);
    accountsArray[accountIndex].balance += transaction.value;
    index_1.writeToDatabase(accountsArray);
    console.log(colors.green("Depósito realizado com sucesso"));
};
const payBill = (cpf, description, value, date) => {
    const accountsArray = accounts_1.getAllAccounts();
    const accountIndex = accountsArray.findIndex((costumer => costumer.cpf === Number(cpf)));
    if (accountIndex === -1) {
        console.log(colors.red("Dados inválidos"));
        return;
    }
    if (moment_1.default(date, "DD/MM/YYYY").unix() < moment_1.default().unix()) {
        console.log(colors.red("Data inválida, deve ser maior do que a data atual"));
        return;
    }
    if (Number(value) > accountsArray[accountIndex].balance) {
        console.log(colors.red("Saldo insuficiente"));
        return;
    }
    const transaction = {
        type: types_1.TransactionsEnum.PAY_BILL,
        value: Number(value),
        date: date ? moment_1.default(date, "DD/MM/YYYY").unix() : moment_1.default().unix(),
        description: description,
        completed: false,
    };
    accountsArray[accountIndex].accountStatement.push(transaction);
    index_1.writeToDatabase(accountsArray);
    if (date) {
        console.log(colors.green("Agendamento de pagamento realizado com sucesso!"));
    }
    else {
        console.log(colors.green("Pagamento realizado"));
    }
};
