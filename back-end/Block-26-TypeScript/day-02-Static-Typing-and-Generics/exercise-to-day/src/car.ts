export enum colors {
  BLACK = "Preto",
  WHITE = "Branco",
  RED = "Vermelho",
  SILVER = "Prata",
}

export enum doors {
  DOOR1 = 'Porta do motorista',
  DOOR2 = 'Porta do carona',
  DOOR3 = 'Porta do passageiro a esquerda',
  DOOR4 = 'Porta do passageiro a direita',
}

export enum directions {
  RIGHT = 'Direção para direita.',
  LEFT = 'Direção a esquerda',
}

export class Car {

  brand: string;
  color: colors;
  doors: number;

  constructor(brand: string, color: colors, doors: number) {
    this.brand = brand,
    this.color = color,
    this.doors = doors
  }

  honk(): void {
    console.log('BI BI BI!!!')
  };

  openTheDoor(door: doors): void {
    console.log(`Abrir ${ door }`)
  };

  closeTheDoor(door: doors): void {
    console.log(`Fecha ${ door }`)
  };

  turnOn(): void {
    console.log(`Lingando o carro.`)
  };

  turnOff(): void {
    console.log('Desligando o carro.')
  };

  speedUP(): void {
    console.log('Acelerando o carro.')
  };

  speedDown(): void {
    console.log('Reduzindo a velocidade do carro.')
  };

  stop(): void {
    console.log('Parando o carro.')
  };
  
  turn(direction: directions): void {
    console.log(`Movendo a ${direction}`)
  }
}
