class Dog {

    nome: string;
    raca: string;

    constructor(name: string, breed: string) {
        this.nome = name;
        this.raca = breed;
    }

    speak(): any {
        return `A raça do ${this.nome} é ${this.raca};`
    }
}
  
const dog1 = new Dog('bartolomeu', 'pitbull');

console.log(dog1.speak());