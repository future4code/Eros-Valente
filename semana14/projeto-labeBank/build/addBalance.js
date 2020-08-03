"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBalance = void 0;
const moment_1 = __importDefault(require("moment"));
const getAllAccounts_1 = require("./getAllAccounts");
const index_1 = require("./index");
const types_1 = require("./types");
var colors = require('colors/safe');
exports.addBalance = (name, cpf, value) => {
    const accountsArray = getAllAccounts_1.getAllAccounts();
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
