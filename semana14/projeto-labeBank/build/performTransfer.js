"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performTransfer = void 0;
const moment_1 = __importDefault(require("moment"));
const getAllAccounts_1 = require("./getAllAccounts");
const index_1 = require("./index");
const types_1 = require("./types");
var colors = require('colors/safe');
exports.performTransfer = (senderName, senderCpf, recieverName, recieverCpf, value, description, date) => {
    const accountsArray = getAllAccounts_1.getAllAccounts();
    const senderAcountIndex = accountsArray.findIndex((costumer => costumer.name === senderName && costumer.cpf === Number(senderCpf)));
    const recieverAccountIndex = accountsArray.findIndex((costumer => costumer.name === recieverName && costumer.cpf === Number(recieverCpf)));
    if (senderAcountIndex === -1 || recieverAccountIndex === -1) {
        console.log(colors.red("Dados do cliente inválidos"));
        return;
    }
    if (date && (moment_1.default(date, "DD/MM/YYYY").unix() < moment_1.default().unix())) {
        console.log(colors.red("Data inválida, deve ser maior do que a data atual"));
        return;
    }
    if (accountsArray[senderAcountIndex].balance < Number(value) || accountsArray[senderAcountIndex].balance === 0) {
        console.log(colors.red("Saldo insuficiente"));
        return;
    }
    const senderTransaction = {
        type: types_1.TransactionsEnum.TRANSFER,
        value: Number(value),
        date: date ? moment_1.default(date, "DD/MM/YYYY").unix() : moment_1.default().unix(),
        description: `${description} (para: ${recieverName} | CPF: ${recieverCpf})`,
        completed: false,
    };
    accountsArray[senderAcountIndex].accountStatement.push(senderTransaction);
    const recieverTransaction = {
        type: types_1.TransactionsEnum.TRANSFER,
        value: Number(value),
        date: date ? moment_1.default(date, "DD/MM/YYYY").unix() : moment_1.default().unix(),
        description: `${description} (de: ${senderName} | CPF: ${senderCpf})`,
        completed: false,
    };
    accountsArray[recieverAccountIndex].accountStatement.push(recieverTransaction);
    index_1.writeToDatabase(accountsArray);
    if (date) {
        console.log(colors.green("Transferência agendada com sucesso"));
    }
    else {
        console.log(colors.green("Transferência realizada com sucesso"));
    }
};
