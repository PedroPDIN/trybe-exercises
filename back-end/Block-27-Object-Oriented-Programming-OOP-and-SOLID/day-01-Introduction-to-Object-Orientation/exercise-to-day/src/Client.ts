class Client {

  private _name: string;

  constructor(name: string) {
    this._name = name
  }

  public get name() {
    return this._name;
  }
}

class Order {

  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name,
    this._price = price
  }

  public get name() {
    return this._name;
  }

  public get price() {
    return this._price;
  }
}


class OrderItem {

  private _client: string;
  private _consumed: number[]
  private _payment: string;
  private _discount: number;

  constructor(client: string, consumed: number[], payment: string, discount: number) {
    this._client = client,
    this._consumed = consumed,
    this._payment = payment,
    this._discount = discount
  }

  public get client() {
    return this._client;
  }

  public get payment() {
    return this._payment;
  }

  public get consumed() {
    return this._consumed;
  }

  public get discount() {
    return this._discount;
  }

  public somConsumed() {
    return this._consumed.reduce((acc, value) => acc + value, 0);
  }

  public averageConsumed(): number {
      return this.somConsumed() * (1 - this.discount)
  }
}

const resultOrder = new OrderItem('Pedro', [5, 10], 'Credito', 0.1);
console.log(`Valor Total: ${resultOrder.somConsumed()}, Método de Pagamento: ${resultOrder.payment}`);
console.log(`Valor Total com desconto: ${resultOrder.averageConsumed()}, Método de pagamento: ${resultOrder.payment}`);
