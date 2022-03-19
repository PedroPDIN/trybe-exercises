const fs = require('fs').promises;

const dataFile = './simpsons-94f8eb570f2ea830462ee2375ded177b.json';

async function main() {
const newData = await fs.readFile(dataFile, 'utf-8')
.then((result) => JSON.parse(result))
.then((data) => data.filter((value) => value.name.split(' ')[1] === 'Simpson'))
.catch((err) => console.log(err));


  try {
    const dataFamily = './simpsonFamily.json'
    await fs.writeFile(dataFamily, JSON.stringify(newData))
    console.log(`arquivo alterado com sucesso: ${dataFamily}`)
  } catch (err) {
    console.log(err)
  }
}

main();