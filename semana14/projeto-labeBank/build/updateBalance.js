"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBalance = void 0;
const moment_1 = __importDefault(require("moment"));
const getAllAccounts_1 = require("./getAllAccounts");
const index_1 = require("./index");
var colors = require('colors/safe');
exports.updateBalance = () => {
    const accountsArray = getAllAccounts_1.getAllAccounts();
    for (let account of accountsArray) {
        account.accountStatement.forEach((transaction) => {
            if (transaction.date <= moment_1.default().unix() && transaction.completed === false) {
                transaction.completed = true;
                account.balance -= transaction.value;
            }
        });
    }
    index_1.writeToDatabase(accountsArray);
    console.log(colors.green("Saldos atualizados com sucesso"));
};
