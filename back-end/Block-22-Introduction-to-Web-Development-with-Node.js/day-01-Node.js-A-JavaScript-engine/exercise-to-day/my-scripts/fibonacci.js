const { questionInt } = require("readline-sync");

const fibonacci = () => {
  const value = questionInt('Quantos valores na sequência de fibonacci você prefere? ');
  const values = [0, 1];

  for(let i = 2; i <= value; i += 1) {
    values.push(Number(values[values.length - 1]) + Number(values[values.length - 2]))
  }
  return values;
};

console.log(fibonacci());
