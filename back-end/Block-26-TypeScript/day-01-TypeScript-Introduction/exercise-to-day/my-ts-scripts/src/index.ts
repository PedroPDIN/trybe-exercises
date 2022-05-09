import { months } from './Months';
import readline from 'readline-sync';

const listMonths = Object.values(months)
// https://www.npmjs.com/package/readline-sync
const question = readline.keyInSelect(listMonths, 'Escolha um mês!!!');
console.log(question);