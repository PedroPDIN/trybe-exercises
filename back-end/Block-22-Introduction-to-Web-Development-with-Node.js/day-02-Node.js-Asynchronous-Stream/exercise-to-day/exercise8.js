const fs = require("fs").promises;
const readline = require("readline");

const response = (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

async function main() {
  const message = `Digite um numero: `;
  const valuePromise = await response(message);

  if(valuePromise < 0) console.log('Numero inválido') 
  if(valuePromise % 3 === 0 && valuePromise % 5 === 0) console.log('FizzBuzz')
  if(valuePromise % 3 === 0) console.log('Fizz');
  if(valuePromise % 5 === 0) console.log('Buzz');
  else console.log(valuePromise);
}

main();
