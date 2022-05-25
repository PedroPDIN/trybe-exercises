abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void ;
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _special: string) {
    super()
  }

    talk(): void {
    console.log(`Meu nome é ${this._name}, meu ataque é de curta alcance.`)
  }

  specialMove(): void {
    console.log(`Minha habilidades ${this._special}`)
    
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _special: string) {
    super()
  }

    talk(): void {
    console.log(`Meu nome é ${this._name}, meu ataque é de longa alcance.`)
  }

  specialMove(): void {
    console.log(`Minha habilidades ${this._special}`)
    
  }
}

const Mario = new MeleeCharacter('Mario', 'Estrela');
const Bhowser = new LongRangeCharacter('Bhowser', 'Lança Espinho')

const bross = (character: Character) => {
  character.talk();
  character.specialMove();
};

bross(Mario);
bross(Bhowser);