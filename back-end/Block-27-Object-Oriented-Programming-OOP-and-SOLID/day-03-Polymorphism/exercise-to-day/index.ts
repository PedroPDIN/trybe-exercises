// import Person from "./src/Person";
import Student from "./src/School";
import Subject from "./src/Subject";

// Student
const Cirilo = new Student('Cirilo', new Date('1998/12/02'));

// Person
// const Pedro = new Person('Pedro', new Date('2000/02/15'));
// const Xablau = new Person('Xablau', new Date('1999/01/01'));

// Subject
const Matematica = new Subject('Matemática');
const Historia = new Subject('História');
const Filosofia = new Subject('Filosofia');


console.log('\n==========Student===========\n')
console.log('Nome:', Cirilo.name);
console.log('Data de nascimento:', Cirilo.birthDate);
console.log('Matricula:', Cirilo.enrollment);
console.log('Nota de Provas: ', Cirilo.examGrades = [10, 10, 5, 8]);
console.log('Notas de trabalho: ', Cirilo.workGrades = [7, 10]);
console.log('Resultado:', Cirilo.message());


//console.log('\n============Person============\n')
//console.log(`Nome: ${Pedro.name}, Nascimento: ${Pedro.birthDate}`);
//console.log(`Nome: ${Xablau.name}, Nascimento: ${Xablau.birthDate}`);

console.log('\n========Subject============\n')
console.log('Matéria:', Matematica.name);
console.log('Matéria:', Historia.name);
console.log('Matéria:', Filosofia.name);