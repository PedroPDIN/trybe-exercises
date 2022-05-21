import Person from "./Person";
import Subject from "./Subject";
import * as interfaces from "./interfaces";

export default class Teacher extends Person implements interfaces.IEmployee {
  private _subject: string = ''; // disciplina do professor(a)
  private _registration: string;
  private _admissionDate: Date ;
  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    private _subject: Subject,
    ) {
      super(name, birthDate);
      this.salary = _salary,
      this.subject = _subject,
      this._admissionDate = new Date,
      this._registration = this.generateRegistration()
    }

    public get name(): string { return this.name};
    public get birthDate(): Date { return this.birthDate };
    public get salary(): number { return this._salary };
    public get subject(): string { return this._subject };
    public

    private generateRegistration(): string {
      let valueRegistration =[]
      for(let i = 1; i <= 16; i ++) {
        const numberRandom = Math.floor(Math.random() * 10 + 1);
       valueRegistration.push(numberRandom);
      };
      // console.log(typeof valueRegistration.join(''))
      return valueRegistration.join('');
    }
}