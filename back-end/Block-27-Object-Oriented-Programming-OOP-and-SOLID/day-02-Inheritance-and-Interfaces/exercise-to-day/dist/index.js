"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./src/Person"));
const School_1 = __importDefault(require("./src/School"));
const Subject_1 = __importDefault(require("./src/Subject"));
// Student
const Cirilo = new School_1.default('Cirilo', new Date('1998/12/02'));
// Person
const Pedro = new Person_1.default('Pedro', new Date('2000/02/15'));
const Xablau = new Person_1.default('Xablau', new Date('1999/01/01'));
// Subject
const Matematica = new Subject_1.default('Matemática');
const Historia = new Subject_1.default('História');
const Filosofia = new Subject_1.default('Filosofia');
console.log('\n==========Student===========\n');
console.log('Nome:', Cirilo.name);
console.log('Data de nascimento:', Cirilo.birthDate);
console.log('Matricula:', Cirilo.enrollment);
console.log('Nota de Provas: ', Cirilo.examGrades = [10, 10, 5, 8]);
console.log('Notas de trabalho: ', Cirilo.workGrades = [7, 10]);
console.log('Resultado:', Cirilo.message());
console.log('\n============Person============\n');
console.log(`Nome: ${Pedro.name}, Nascimento: ${Pedro.birthDate}`);
console.log(`Nome: ${Xablau.name}, Nascimento: ${Xablau.birthDate}`);
console.log('\n========Subject============\n');
console.log('Matéria:', Matematica.name);
console.log('Matéria:', Historia.name);
console.log('Matéria:', Filosofia.name);
