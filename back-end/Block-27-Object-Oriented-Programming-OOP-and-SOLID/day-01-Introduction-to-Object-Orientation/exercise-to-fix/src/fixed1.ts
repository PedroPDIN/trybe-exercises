class Tv {

  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c:string[]) {
    this._brand = b,
    this._size = s,
    this._resolution = r,
    this._connections = c
  }

  turnOn() {
    console.log(`${this._brand}, ${this._size}, ${this._resolution}, ${this._connections}`);
  }

  get connectedTo(): string {
    return this._connectedTo as string;
  }

  set connectedTo(value: string) {
    if(this._connections.includes(value)) this._connectedTo = value
    else console.log("Sorry, connection unavailable!")
  }
}


const tv1 = new Tv('samsung', 30, 'FullHd', ['HDMI', 'Ethernet', 'VGA', 'USB 3.0'])

tv1.turnOn();
tv1.connectedTo = 'VGA';
console.log(tv1.connectedTo)