const fs = require("fs").promises;

const files = () => {
  const arrayValues = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

  arrayValues.map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));

  Promise.all([
    fs.readFile('./file1.txt'),
    fs.readFile('./file2.txt'),
    fs.readFile('./file3.txt'),
    fs.readFile('./file4.txt'),
    fs.readFile('./file5.txt')
  ])
  .then((datas) => fs.readFile(datas, ))
};

console.log(files())