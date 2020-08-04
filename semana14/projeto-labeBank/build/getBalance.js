"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const getAllAccounts_1 = require("./getAllAccounts");
var colors = require('colors/safe');
exports.getBalance = (name, cpf) => {
    const accountsArray = getAllAccounts_1.getAllAccounts();
    const accountIndex = accountsArray.findIndex((costumer => costumer.name === name && costumer.cpf === Number(cpf)));
    if (accountIndex !== -1) {
        const balance = accountsArray[accountIndex].balance;
        console.log(`Conta de ${accountsArray[accountIndex].name}\nSaldo: ${balance.toFixed(2)}`);
        return;
    }
    else {
        console.log(colors.red("Dados inválidos"));
        return;
    }
};
