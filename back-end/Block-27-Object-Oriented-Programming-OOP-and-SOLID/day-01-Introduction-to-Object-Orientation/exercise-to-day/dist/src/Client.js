"use strict";
/* class Client {

  private _name: string;
} */
class Order {
    constructor(name, price) {
        this._name = name,
            this._price = price;
    }
}
class OrderItem {
    constructor(client, consumed, payment, discount) {
        this._client = client,
            this._consumed = consumed,
            this._payment = payment,
            this._discount = discount;
    }
    get client() {
        return this._client;
    }
    get payment() {
        return this._payment;
    }
    get consumed() {
        return this._consumed;
    }
    get discount() {
        return this._discount;
    }
    somConsumed() {
        return this._consumed.reduce((acc, value) => acc + value, 0);
    }
    averageConsumed() {
        return this.somConsumed() * (1 - this.discount);
    }
}
const resultOrder = new OrderItem('Pedro', [5, 10], 'Credito', 0.1);
console.log(`Valor Total: ${resultOrder.somConsumed()}, método de pagamento: ${resultOrder.payment}`);
console.log(`Valor Total com desconto: ${resultOrder.averageConsumed()}, método de pagamento: ${resultOrder.payment}`);
