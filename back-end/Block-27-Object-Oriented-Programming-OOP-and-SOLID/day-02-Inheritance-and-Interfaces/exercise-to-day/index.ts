import School from "./src/School";
import Person from "./src/Person";

console.log('===========================Schools========================\n')

const student1 = new School('001001', 'Pedro', [10, 2, 4, 5], [10, 10]);
console.log(student1.message())

console.log('\n=======================Person============================\n')

const person1 = new Person('Pedro', new Date('2022/02/15'));
const person2 = new Person('Xablau', new Date('1998/11/11'));

console.log(person1.name, person1.birthDate);
console.log(person2.name, person2.birthDate);