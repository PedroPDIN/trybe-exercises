const fs = require('fs').promises
const readline = require('readline');

const response = (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer)
    });
  })
};

const valueFile = async () => {

  const message = `Qual arquivo (txt) você pretende utilizar?
  
  file1.txt \n  file2.txt \n  file3.txt \n  file4.txt \n  file5.txt \n  fileAll.txt
  
  => `;
  const promise = await response(message)

  try {
    const result = await fs.readFile(promise, 'utf-8')
    console.log('Arquivo selecionado com sucesso.')
    main(result)
  } catch (error) {
    console.log('Arquivo não encontrado!!!')
  }
}


async function main(file) {
  const message = `Qual é nome do arquivo destino?
  
  file1.txt \n  file2.txt \n  file3.txt \n  file4.txt \n  file5.txt \n  fileAll.txt
  
  => `;
  const questionMessage = "Nova palavra a ser substituída: ";
  const questionMessage2 =  `Qual palavra você prefere substituir?
  \n ${file} \n \n`;
  
  const promiseNewPhrase = await response(questionMessage);
  const promiseValuePhrase = await response(questionMessage2)
  const valueFile = await response(message)

  const newPhrase = file.replace(new RegExp(promiseValuePhrase, 'g'), promiseNewPhrase)
 
  try {
    await fs.writeFile(valueFile, newPhrase);

    console.log(`Alteração feita com sucesso 
    \n ${promiseNewPhrase} => ${promiseValuePhrase}`) 
    
  } catch (err) {
    console.log(`Erro ao alterar o Arquivo. ${err}`)
  }
}

valueFile();
