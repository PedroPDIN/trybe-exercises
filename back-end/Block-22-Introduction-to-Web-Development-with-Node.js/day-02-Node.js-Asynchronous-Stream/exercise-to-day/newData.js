const fs = require('fs').promises;

const dataFile = './simpsons-94f8eb570f2ea830462ee2375ded177b.json';

async function main() {
const newData = await fs.readFile(dataFile, 'utf-8')
.then((result) => JSON.parse(result))
.then((data) => data.filter((value) => Number(value.id) !== 6 && Number(value.id) !== 10))
.catch((err) => console.log(err));


  try {
    await fs.writeFile(dataFile, JSON.stringify(newData))
    console.log(`alteração feita com sucesso ao arquivo: ${dataFile}`)
  } catch (err) {
    console.log(err)
  }
}

main();
