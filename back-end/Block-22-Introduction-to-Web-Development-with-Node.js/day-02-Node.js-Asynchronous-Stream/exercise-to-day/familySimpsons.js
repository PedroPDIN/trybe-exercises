const fs = require('fs').promises;

const dataFile = './simpsons-94f8eb570f2ea830462ee2375ded177b.json';

async function main() {
const newData = await fs.readFile(dataFile, 'utf-8')
.then((result) => JSON.parse(result))
.then((data) => data.filter((value) => value.name.split(' ')[1] === 'Simpson'))
.then((data) => data.slice(0, data.length - 1))
.catch((err) => console.log(err));


  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newData), { flag: 'wx' })
    console.log(`novo arquivo foi criado.`)
  } catch (err) {
    console.log(err)
  }
}

main();