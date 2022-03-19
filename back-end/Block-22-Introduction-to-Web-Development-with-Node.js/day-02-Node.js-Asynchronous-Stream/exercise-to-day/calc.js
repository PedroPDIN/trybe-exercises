const calc = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números'));
    }
    const AVG = 50;
    const result = (a + b) * c;
    result < AVG ? resolve('Valor muito baixo') : resolve(result);
  });

  return promise;
};


const numberRandom = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const NR = numberRandom();

async function main() {
  try {
    const data = await calc(NR, NR, NR);
    console.log(`sucesso ${data}`)
  } catch (err) {
    console.log(err)
  }
}

main();

// abaixo a sintaxe para resolver o exercício 2:

/* .then((data) => console.log(`sucesso ${data}`))
.catch((err) => console.log(err)); */
