"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.directions = exports.doors = exports.colors = void 0;
var colors;
(function (colors) {
    colors["BLACK"] = "Preto";
    colors["WHITE"] = "Branco";
    colors["RED"] = "Vermelho";
    colors["SILVER"] = "Prata";
})(colors = exports.colors || (exports.colors = {}));
var doors;
(function (doors) {
    doors["DOOR1"] = "Porta do motorista";
    doors["DOOR2"] = "Porta do carona";
    doors["DOOR3"] = "Porta do passageiro a esquerda";
    doors["DOOR4"] = "Porta do passageiro a direita";
})(doors = exports.doors || (exports.doors = {}));
var directions;
(function (directions) {
    directions["RIGHT"] = "Dire\u00E7\u00E3o para direita.";
    directions["LEFT"] = "Dire\u00E7\u00E3o a esquerda";
})(directions = exports.directions || (exports.directions = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand,
            this.color = color,
            this.doors = doors;
    }
    honk() {
        console.log('BI BI BI!!!');
    }
    ;
    openTheDoor(door) {
        console.log(`Abrir ${door}`);
    }
    ;
    closeTheDoor(door) {
        console.log(`Fecha ${door}`);
    }
    ;
    turnOn() {
        console.log(`Lingando o carro.`);
    }
    ;
    turnOff() {
        console.log('Desligando o carro.');
    }
    ;
    speedUP() {
        console.log('Acelerando o carro.');
    }
    ;
    speedDown() {
        console.log('Reduzindo a velocidade do carro.');
    }
    ;
    stop() {
        console.log('Parando o carro.');
    }
    ;
    turn(direction) {
        console.log(`Movendo a ${direction}`);
    }
}
exports.Car = Car;
