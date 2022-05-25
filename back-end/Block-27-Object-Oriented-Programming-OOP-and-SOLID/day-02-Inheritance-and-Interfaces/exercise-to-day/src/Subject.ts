export default class Subject {
  constructor(private _name: string) {
    this.name = _name // nome da disciplina.
  }

  public get name(): string { return this._name };

  public set name(params: string) {
    this.isValidName(params);
    this._name = params
  }

  private isValidName(name: string): void {
    const LIMIT = 3;
    if (name.length < LIMIT ) throw new Error ('The name must be at least 3 characters long')
  }
}