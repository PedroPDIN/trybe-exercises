export default abstract class Person {
    constructor(private _name: string, private _birthDate: Date) {
      this.name = _name,
      this.birthDate = _birthDate
    }
  
    public get name():string { return this._name };
    public get birthDate(): Date { return this._birthDate };
  
    public set name(params: string) {
      Person.isValidName(params);
      this._name = params;
    }
  
    public set birthDate(params: Date) {
      Person.isValidDate(params);
      Person.isValidAge(params)
      this._birthDate = params;
    }
  
    private static isValidName = (name: string): void => {
      if (name.length < 3) throw new Error("Error: Invalid name, minimum 3 characters");
    };
  
    private static isValidDate = (date: Date): void => {
      if (date.getTime() > new Date().getTime())
      throw new Error("Error: The date of birth cannot be a date in the future");
    };
  
    private static isValidAge = (date: Date): void => {
      const currentYear = new Date().getFullYear();
      const age = date.getFullYear() - currentYear;
      const LIMIT_YEAR = 120;
  
      if(age > LIMIT_YEAR) throw new Error('Error: The person cannot be over 120 years old');
    };
  }