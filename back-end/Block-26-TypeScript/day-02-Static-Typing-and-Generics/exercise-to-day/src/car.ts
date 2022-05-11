enum colors {
  BLACK = "Preto",
  WHITE = "Branco",
  RED = "Vermelho",
  SILVER = "Prata",
}

enum doors {

}

class car {

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

  openTheDoor(): void {
    console.log('')
  }
}
