export default class Person {
  private _name: string = '';
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  public get name() {
    return this._name;
  }
  public get birthDate() {
    return this._birthDate;
  }

  public set name(params: string) {
    this.isValidName(params);
    this._name = params;
  }

  public set birthDate(params: Date) {
    this.isValidDate(params);
    this.isValidAge(params)
    this._birthDate = params;
  }

  private isValidName = (name: string): void => {
    if (name.length < 3) console.log("Error: Invalid name, minimum 3 characters");
  };

  private isValidDate = (date: Date): void => {
    if (date.getTime() > new Date().getTime())
      console.log("Error: The date of birth cannot be a date in the future");
  };

  private isValidAge = (date: Date): void => {
    const currentYear = new Date().getFullYear();
    const age = date.getFullYear() - currentYear;
    const LIMIT_YEAR = 120;

    if(age > LIMIT_YEAR) console.log('Error: The person cannot be over 120 years old');
  };
}