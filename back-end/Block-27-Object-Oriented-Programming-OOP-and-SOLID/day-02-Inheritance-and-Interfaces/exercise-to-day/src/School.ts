import Person from "./Person";

export default class Student extends Person{
    private _enrollment: string = ''; // matrícula
    // private _name: string; // nome
    private _examGrades: number[] = []; // notas de provas
    private _workGrades: number[] = []; // notas de trabalho
  
    constructor(name: string, birthDate: Date) {
      super(name, birthDate)
      this.enrollment = this.generateEnrollment()
/*       this.examGrades = _examGrades,
      this.workGrades = _workNotes */
    }
  
/*     public get name() {
      return this._name;
    } */
  
    public get enrollment(): string {
      return this._enrollment;
    }
  
    public get examGrades(): number[] {
      return this._examGrades;
    }
  
    public get workGrades() {
      return this._workGrades;
    }

    public set enrollment(value: string) {
      const LIMIT = 16;
      // console.log('linha 34', value.length)
      if (value.length < LIMIT) throw new Error ('Registration must be at least 16 characters long')
      this._enrollment = value;
    }
  
    public set examGrades(value: number[]) {
      const LIMIT = 4;
      if (value.length > LIMIT) throw new Error ('The student person must have a maximum of 4 test scores');
      this._examGrades = value
    }

    public set workGrades(value: number[]) {
      const LIMIT = 2;
      if (value.length > LIMIT) throw new Error ('The student person must have a maximum of 2 grades of work')
    }

    private somNotes() {
      const notes = [...this._examGrades, ...this._workGrades]
      return notes.reduce((acc, value) => acc + value, 0)
    }
  
    private averageNotes() {
      const lengthNotes = this._examGrades.length + this._workGrades.length;
      const resultNotes = this.somNotes();
      return (resultNotes / lengthNotes).toFixed(1);
    }


    private generateEnrollment(): string {
      let valuesEnrollment =[]
      for(let i = 1; i <= 16; i ++) {
        const numberRandom = Math.floor(Math.random() * 10 + 1);
        valuesEnrollment.push(numberRandom);
      };
      // console.log(typeof valuesEnrollment.join(''))
      return valuesEnrollment.join('');
    }

  
    public message(): string {
      return `ID de matricula: ${this.enrollment}, Aluno: ${this.name}, Média: ${this.averageNotes()}`;
    }
  }