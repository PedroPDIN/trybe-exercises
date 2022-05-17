"use strict";
class Tv {
    constructor(b, s, r, c) {
        this.brand = b,
            this.size = s,
            this.resolution = r,
            this.connections = c;
    }
    turnOn() {
        console.log(`${this.brand}, ${this.size}, ${this.resolution}, ${this.connections}`);
    }
}
const tv1 = new Tv('samsung', 30, 'FullHd', 'HDMI');
tv1.turnOn();
