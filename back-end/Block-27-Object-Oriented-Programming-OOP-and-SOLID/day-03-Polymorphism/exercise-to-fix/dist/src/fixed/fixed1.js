"use strict";
class Character {
    talk() { }
    ;
}
class MeleeCharacter extends Character {
    constructor(_name, _special) {
        super();
        this._name = _name;
        this._special = _special;
    }
    talk() {
        console.log(`Meu nome é ${this._name}, meu ataque é de curta alcance.`);
    }
    specialMove() {
        console.log(`Minha habilidades ${this._special}`);
    }
}
class LongRangeCharacter extends Character {
    constructor(_name, _special) {
        super();
        this._name = _name;
        this._special = _special;
    }
    talk() {
        console.log(`Meu nome é ${this._name}, meu ataque é de longa alcance.`);
    }
    specialMove() {
        console.log(`Minha habilidades ${this._special}`);
    }
}
const Mario = new MeleeCharacter('Mario', 'Estrela');
const Bhowser = new LongRangeCharacter('Bhowser', 'Lança Espinho');
const bross = (character) => {
    character.talk();
    character.specialMove();
};
bross(Mario);
bross(Bhowser);
