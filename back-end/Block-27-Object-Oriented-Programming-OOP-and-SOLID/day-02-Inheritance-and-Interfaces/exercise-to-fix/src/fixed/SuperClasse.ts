class SuperClass {
  
  isSuper: boolean;

  constructor() {
    this.isSuper = true
  }

  public sayHello() {
    console.log('Olá mundo!')
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false
  }
}

const myFunc = (obj: SuperClass) => {
  obj.sayHello();
  console.log(obj.isSuper ? 'Super!' : 'Sub');
}

const Super = new SuperClass();
const Sub = new SubClass();

myFunc(Super);
myFunc(Sub);