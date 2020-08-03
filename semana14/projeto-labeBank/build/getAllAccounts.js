"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAccounts = void 0;
const index_1 = require("./index");
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
