"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        /* this.name = _name, */
        this.birthDate = _birthDate;
    }
    get name() { return this._name; }
    ;
    get birthDate() { return this._birthDate; }
    ;
    set name(params) {
        Person.isValidName(params);
        this._name = params;
    }
    set birthDate(params) {
        Person.isValidDate(params);
        Person.isValidAge(params);
        this._birthDate = params;
    }
}
exports.default = Person;
Person.isValidName = (name) => {
    if (name.length < 3)
        throw new Error("Error: Invalid name, minimum 3 characters");
};
Person.isValidDate = (date) => {
    if (date.getTime() > new Date().getTime())
        throw new Error("Error: The date of birth cannot be a date in the future");
};
Person.isValidAge = (date) => {
    const currentYear = new Date().getFullYear();
    const age = date.getFullYear() - currentYear;
    const LIMIT_YEAR = 120;
    if (age > LIMIT_YEAR)
        throw new Error('Error: The person cannot be over 120 years old');
};
