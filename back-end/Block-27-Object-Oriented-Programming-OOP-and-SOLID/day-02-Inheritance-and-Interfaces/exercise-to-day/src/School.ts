import Person from "./Person";

export default class School extends Person {
    private _enrollment: string = ''; // matrícula
    private _examGrades: number[] = []; // notas de provas
    private _workGrades: number[] = []; // notas de trabalho
  
    constructor(name: string, birthDate: Date) {
      super(name,birthDate);
      this.enrollment = this.getRandomEnrollment();
    }
  
  
    public get enrollment(): string {
      return this._enrollment;
    }
  
    public get examGrades(): number[] {
      return this.examGrades;
    }
  
    public get workGrades(): number[] {
      return this.workGrades;
    }
  
    public set enrollment() {
      
    }

    public somGrades() {
      const notes = [...this.examGrades, ...this.workGrades]
      return notes.reduce((acc, value) => acc + value, 0)
    }
  
    public averageGrades() {
      const lengthNotes = this.examGrades.length + this.workGrades.length;
      const resultNotes = this.somGrades();
      return (resultNotes / lengthNotes).toFixed(2);
    }
  
/*     public message() {
      return `ID de matricula:${this.enrollment}, Aluno: ${this._name} Média: ${this.averageNotes()}`;
    } */

    private getRandomEnrollment(): number {
      return Math.floor(Math.random() * 101)
    }
    
  };