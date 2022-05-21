"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = ''; // matrícula
        // private _name: string; // nome
        this._examGrades = []; // notas de provas
        this._workGrades = []; // notas de trabalho
        this.enrollment = this.generateEnrollment();
        /*       this.examGrades = _examGrades,
              this.workGrades = _workNotes */
    }
    /*     public get name() {
          return this._name;
        } */
    get enrollment() {
        return this._enrollment;
    }
    get examGrades() {
        return this._examGrades;
    }
    get workGrades() {
        return this._workGrades;
    }
    set enrollment(value) {
        const LIMIT = 16;
        // console.log('linha 34', value.length)
        if (value.length < LIMIT)
            throw new Error('Registration must be at least 16 characters long');
        this._enrollment = value;
    }
    set examGrades(value) {
        const LIMIT = 4;
        if (value.length > LIMIT)
            throw new Error('The student person must have a maximum of 4 test scores');
        this._examGrades = value;
    }
    set workGrades(value) {
        const LIMIT = 2;
        if (value.length > LIMIT)
            throw new Error('The student person must have a maximum of 2 grades of work');
    }
    somNotes() {
        const notes = [...this._examGrades, ...this._workGrades];
        return notes.reduce((acc, value) => acc + value, 0);
    }
    averageNotes() {
        const lengthNotes = this._examGrades.length + this._workGrades.length;
        const resultNotes = this.somNotes();
        return (resultNotes / lengthNotes).toFixed(1);
    }
    generateEnrollment() {
        let valuesEnrollment = [];
        for (let i = 1; i <= 16; i++) {
            const numberRandom = Math.floor(Math.random() * 10 + 1);
            valuesEnrollment.push(numberRandom);
        }
        ;
        // console.log(typeof valuesEnrollment.join(''))
        return valuesEnrollment.join('');
    }
    message() {
        return `ID de matricula: ${this.enrollment}, Aluno: ${this.name}, Média: ${this.averageNotes()}`;
    }
}
exports.default = Student;
