"use strict";
class SuperClass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class SubClass extends SuperClass {
}
const myFunc = (obj) => {
    obj.sayHello();
};
const Super = new SuperClass();
const Sub = new SubClass();
myFunc(Super);
myFunc(Sub);
