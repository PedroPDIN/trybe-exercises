class Voo {

    destiny: string;
    company: string | number;

    constructor(destiny: string, company: string | number) {
        this.destiny = destiny,
        this.company = company
    }

    passengerStatus(name: string, local: string): void {
        console.log(`O passageiro ${name}, vai de ${local} para ${this.destiny} com a ${this.company}.`);
    }
}

const planVoo1 = new Voo('Paris', 'Gol');

console.log(planVoo1.passengerStatus('Pedro', 'Parauapebas'));