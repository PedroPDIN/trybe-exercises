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
    constructor() {
        super();
        this.isSuper = false;
    }
}
const myFunc = (obj) => {
    obj.sayHello();
    console.log(obj.isSuper ? 'Super!' : 'Sub');
};
const Super = new SuperClass();
const Sub = new SubClass();
myFunc(Super);
myFunc(Sub);
