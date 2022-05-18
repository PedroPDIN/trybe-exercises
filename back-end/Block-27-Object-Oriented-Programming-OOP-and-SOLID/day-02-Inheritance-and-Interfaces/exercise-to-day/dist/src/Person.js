"use strict";
class Person {
    constructor(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.isValidName = (name) => {
            if (name.length < 3)
                console.log("Invalid name, minimum 3 characters");
        };
        this.isValidDate = (date) => {
            if (date.getTime() > new Date().getTime())
                console.log("The date of birth cannot be a date in the future");
        };
        this.isValidAge = (date) => {
            const correnteYear = new Date();
            const age = correnteYear.getFullYear() - date.getFullYear();
            const LIMIT_YEAR = 120;
            if (age > LIMIT_YEAR)
                console.log('The person cannot be over 120 years old');
        };
    }
    get name() {
        return this._name;
    }
    get date() {
        return this._birthDate;
    }
    set name(params) {
        this.isValidName(params);
        this._name = params;
    }
    set date(params) {
        this.isValidDate(params);
        this.isValidAge(params);
        this._birthDate = params;
    }
}
const person1 = new Person('Pedro', new Date('2239-02-15'));
const person2 = new Person('Xablau', new Date('1998-11-11'));
console.log(person1.name, person1.date);
console.log(person2.name, person2.date);
