interface MyInterface {
  myNumber: number,
  myFunc(myParam: number): string
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  public myFunc(myParam: number): string {
    const resultSom = this.myNumber + myParam;
    return `Resultado: ${resultSom}`;
  }
}

const myClass = new MyClass(10);
console.log(myClass.myFunc(10));