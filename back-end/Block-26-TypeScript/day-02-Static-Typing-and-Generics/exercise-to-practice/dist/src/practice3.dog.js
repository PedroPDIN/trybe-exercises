"use strict";
class Dog {
    constructor(name, breed) {
        this.nome = name;
        this.raca = breed;
    }
    speak() {
        return `A raça do ${this.nome} é ${this.raca};`;
    }
}
const dog1 = new Dog('bartolomeu', 'pitbull');
console.log(dog1.speak());
