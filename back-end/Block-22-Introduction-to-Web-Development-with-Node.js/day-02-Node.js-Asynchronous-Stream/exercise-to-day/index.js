// const { question, questionInt } =  require('readline-sync')
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

async function main() {
  const message = `Qual arquivo (txt) você pretende executar?
  
  file1.txt \n  file2.txt \n  file3.txt \n  file4.txt \n  file5.txt \n  fileAll.txt
  
  => `

  const promise = await response(message)

  try {
    const result = await fs.readFile(promise, 'utf-8')
    console.log(result)
  } catch (error) {
    console.log('Arquivo não encontrado!!!')
  }
}

main()
