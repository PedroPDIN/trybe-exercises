export default class School {
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
  
    public get name() {
      return this._name;
    }
  
    public get registration() {
      return this._registration;
    }
  
    public get examGrades() {
      return this._examGrades;
    }
  
    public get workNotes() {
      return this._workNotes;
    }
  
    public somNotes() {
      const notes = [...this._examGrades, ...this._workNotes]
      return notes.reduce((acc, value) => acc + value, 0)
    }
  
    public averageNotes() {
      const lengthNotes = this._examGrades.length + this._workNotes.length;
      const resultNotes = this.somNotes();
      return (resultNotes / lengthNotes).toFixed(2);
    }
  
    public message() {
      return `ID de matricula:${this._registration}, Aluno: ${this._name} Média: ${this.averageNotes()}`;
    }
  };