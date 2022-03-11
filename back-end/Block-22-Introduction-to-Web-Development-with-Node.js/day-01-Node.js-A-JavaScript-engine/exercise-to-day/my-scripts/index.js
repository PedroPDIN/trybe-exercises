const { questionInt } = require("readline-sync");

const listScript = [
  { id: 1, name: 'imc', script: "./imc" },
  { id: 2, name: 'velocidade', script: "./velocidade" },
  { id: 3, name: 'sorteio', script: "./sorteio" },
  { id: 4, name: 'fatorial', script: "./fatorial" },
  { id: 5, name: 'fibonacci', script: "./fibonacci" }
];

const run = () => {
  const value = questionInt(`
  Qual scrip você pretende realizar?

  1 - IMC 
  2 - Velocidade
  3 - Sorteio
  4 - Fatorial
  5 - Fibonacci

  DIGITE O NUMERO DO SCRIPT
  ` 
)

  if(value > 5) return 'Numero Inválido'
  return listScript[value - 1].script;
};

require(run());