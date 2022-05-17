class School {
  private _registration: string; // matrícula
  private _name: string; // nome
  private _examGrades: number[]; // notas de provas
  private _workNotes: number[]; // notas de trabalho

  constructor(_registration: string, _name: string, _examGrades: number[], _workNotes: number[]) {
    this._registration = _registration,
    this._name = _name,
    this._examGrades = _examGrades,
    this._workNotes = _workNotes
  }

  somNotes() {
    const notes = [...this._examGrades, ...this._workNotes]
    return notes.reduce((acc, value) => acc + value, 0)
  }

  averageNotes() {
    const lengthNotes = this._examGrades.length + this._workNotes.length;
    const resultNotes = this.somNotes();
    return resultNotes / lengthNotes;
  }

  message() {
    return `ID de matricula:${this._registration}, Aluno: ${this._name} Média: ${this.averageNotes()}`;
  }
}

const student1 = new School('001001', 'Pedro', [10, 2, 4, 5], [10, 10]);
console.log(student1.message())