const { question, questionInt } = require("readline-sync");

const sorteio = () => {
  const numberRandom = Math.floor(Math.random() * 11);

  const value = questionInt("Qual é o numero que estou pensando ? ");

  if (value === numberRandom) return "Parabéns, número correto!";
  if (value !== numberRandom) return `Opa, não foi dessa vez. O número era ${numberRandom}`
  return numberRandom;
};

const playAgain = () => {
  const response = question("Deseja jogar novamente? digite sim ou não: ");
  if(response === 'sim') return sorteio();
  return console.log('Até a proxima desafiante')
}

console.log(sorteio());
console.log(playAgain());
