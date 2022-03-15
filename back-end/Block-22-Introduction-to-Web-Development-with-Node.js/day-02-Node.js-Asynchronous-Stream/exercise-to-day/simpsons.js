const fs = require('fs').promises;


const Simpsons = (id) => {
  const promise = new Promise((resolve, reject) => {
  const dataFile = './simpsons-94f8eb570f2ea830462ee2375ded177b.json';

  const result = fs.readFile(dataFile, 'utf-8')
  .then((result) => JSON.parse(result))
  .then((data) => data.find((value) => Number(value.id) === id))
  .catch((err) => console.log(err));

    if(!result) reject(new Error('id não encontrado'));

    resolve(result);
  })

  return promise;
};

Simpsons(1)
.then((data) => console.log(data))
.catch((err) => console.log(err))

// abaixo a sintaxe do exercício 1
/* const dataFile = './simpsons-94f8eb570f2ea830462ee2375ded177b.json';

fs.readFile(dataFile, 'utf-8')
.then((result) => JSON.parse(result))
.then((data) => console.log(data.map(({ id, name }) => `${id} - ${name}`)))
.catch((err) => console.log(err)); */

// .then((data) => data.map(({ id, name }) => console.log(`${id} - ${name}`)))
