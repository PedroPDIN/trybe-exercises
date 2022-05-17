"use strict";
class School {
    constructor(_registration, _name, _examGrades, _workNotes) {
        this._registration = _registration,
            this._name = _name,
            this._examGrades = _examGrades,
            this._workNotes = _workNotes;
    }
    get name() {
        return this._name;
    }
    get registration() {
        return this._registration;
    }
    get examGrades() {
        return this._examGrades;
    }
    get workNotes() {
        return this._workNotes;
    }
    somNotes() {
        const notes = [...this._examGrades, ...this._workNotes];
        return notes.reduce((acc, value) => acc + value, 0);
    }
    averageNotes() {
        const lengthNotes = this._examGrades.length + this._workNotes.length;
        const resultNotes = this.somNotes();
        return (resultNotes / lengthNotes).toFixed(2);
    }
    message() {
        return `ID de matricula:${this._registration}, Aluno: ${this._name} Média: ${this.averageNotes()}`;
    }
}
const student1 = new School('001001', 'Pedro', [10, 2, 4, 5], [10, 10]);
console.log(student1.message());
