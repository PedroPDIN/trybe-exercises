"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Months_1 = require("./Months");
const readline_sync_1 = __importDefault(require("readline-sync"));
const listMonths = Object.values(Months_1.months);
// https://www.npmjs.com/package/readline-sync
const question = readline_sync_1.default.keyInSelect(listMonths, 'Escolha um mês!!!');
console.log(question);
