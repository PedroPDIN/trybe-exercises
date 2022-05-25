"use strict";
class Tv {
    constructor(b, s, r, c) {
        this._brand = b,
            this._size = s,
            this._resolution = r,
            this._connections = c;
    }
    turnOn() {
        console.log(`${this._brand}, ${this._size}, ${this._resolution}, ${this._connections}`);
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(value) {
        if (this._connections.includes(value))
            this._connectedTo = value;
        else
            console.log("Sorry, connection unavailable!");
    }
}
const tv1 = new Tv('samsung', 30, 'FullHd', ['HDMI', 'Ethernet', 'VGA', 'USB 3.0']);
tv1.turnOn();
tv1.connectedTo = 'VGA';
console.log(tv1.connectedTo);
