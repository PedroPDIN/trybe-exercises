const { questionFloat } = require('readline-sync');

const imcResult = () => {
  const peso = questionFloat('Qual é seu peso ? ');
  const altura = questionFloat('Qual é sua altura ? ');
  
  const calc = peso / (altura * altura);
  const resultCalc = calc.toFixed(2)
  //const result = `Seu Peso é ${peso} e sua altura é ${altura}`;

  if(resultCalc < 18.5) return 'Abaixo do peso (magreza)';
  if(resultCalc > 18.5 && resultCalc < 24.9) return 'Peso normal';
  if(resultCalc > 25.0 && resultCalc < 29.9) return 'Acima do peso (sobrepeso)';
  if(resultCalc > 30.0 && resultCalc < 34.9) return 'Obesidade grau I';
  if(resultCalc > 35.0 && resultCalc < 39.9) return 'Obesidade grau II';
  if(resultCalc > 40.0) return 'Obesidade grau III e IV';
};

console.log(imcResult())
