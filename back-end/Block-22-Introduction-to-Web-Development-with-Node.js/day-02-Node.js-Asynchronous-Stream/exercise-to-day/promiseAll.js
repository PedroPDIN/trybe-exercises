const fs = require("fs").promises;

async function main() { // usar async/await foi inspirada no gabarito.
  const arrayValues = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

  const files = arrayValues.map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));

  await Promise.all(files)

   const fileNames = [
     './file1.txt',
     './file2.txt',
     './file3.txt',
     './file4.txt',
     './file5.txt',
   ]; // solução inspirado no gabarito.
      // no caso criar um array dedicado aos arquivos pra logo depois fazer a leitura.

  const contents = await Promise.all(
    fileNames.map((content) => fs.readFile(content, 'utf-8'))
  )

  const newContent = contents.join(' ');
  // irá retornar um array com os valores de cada arquivo. Com isso, o uso do join() para "juntar" os valores.

  await fs.writeFile('./fileAll.txt', newContent)
};

main()