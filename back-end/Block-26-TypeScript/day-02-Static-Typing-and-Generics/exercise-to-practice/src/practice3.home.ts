class Home {

    number: number;
    street: string | number;
    district: string | number;

    constructor(number: number, street: string | number, district: string | number) {
        this.number = number,
        this.street = street,
        this.district = district
    }

    homeAddress(name: string): void {
        console.log(`Meu nome é ${name} e minha casa fica no bairro ${this.district}, rua ${this.street} com o número ${this.number}.`)
    }
}

const address1 = new Home(350, 15, 'Da Paz')

console.log(address1.homeAddress('Pedro'));