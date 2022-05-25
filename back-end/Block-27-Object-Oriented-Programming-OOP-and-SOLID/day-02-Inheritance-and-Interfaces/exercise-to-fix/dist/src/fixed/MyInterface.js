"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        const resultSom = this.myNumber + myParam;
        return `Resultado: ${resultSom}`;
    }
}
const myClass = new MyClass(10);
console.log(myClass.myFunc(10));
