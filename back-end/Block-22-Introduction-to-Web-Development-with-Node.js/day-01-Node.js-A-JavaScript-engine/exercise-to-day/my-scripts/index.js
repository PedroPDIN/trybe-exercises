const { questionInt } = require("readline-sync");

const listScript = [
  { id: 1, name: 'imc', script: "./imc" },
  { id: 2, name: 'velocidade', script: "./velocidade" },
  { id: 3, name: 'sorteio', script: "./sorteio" },
];

const run = () => {
  const value = questionInt(`
  Qual scrip você pretende realizar?

  1 - IMC 
  2 - Velocidade
  3 - Sorteio

  DIGITE O NUMERO DO SCRIPT
  `
    
    )

    if(value > 3) return 'Numero Inválido'
    return listScript[value].script;
};

require(run());