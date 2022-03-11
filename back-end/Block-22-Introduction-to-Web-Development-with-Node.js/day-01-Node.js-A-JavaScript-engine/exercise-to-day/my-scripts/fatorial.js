const { questionInt } = require("readline-sync");

const fatorial = () => {
  const value = questionInt(`Digite um numero para realizar o resultado do numero fatorial\n 
  OBS: numero tem que ser maior do que zero (0) `);

  let elements = [];

  if(value > 0 ) {
  for(let i = 1; i <= Number(value); i += 1) elements.push(i);
  return elements.reduce((t, i) => t * i);
  } else {
    return console.log('Numero Inválido')
  }
};

console.log(fatorial());
