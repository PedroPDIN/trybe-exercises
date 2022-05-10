"use strict";
class Voo {
    constructor(destiny, company) {
        this.destiny = destiny,
            this.company = company;
    }
    passengerStatus(name, local) {
        console.log(`O passageiro ${name}, vai de ${local} para ${this.destiny} com a ${this.company}.`);
    }
}
const planVoo1 = new Voo('Paris', 'Gol');
console.log(planVoo1.passengerStatus('Pedro', 'Parauapebas'));
