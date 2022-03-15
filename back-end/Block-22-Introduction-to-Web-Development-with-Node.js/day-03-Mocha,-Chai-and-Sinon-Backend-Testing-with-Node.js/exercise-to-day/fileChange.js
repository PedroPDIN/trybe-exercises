const fs = require('fs');

const changingFile = (file, content) => {
    fs.writeFileSync(file, content);

    return 'ok';
}

const file = 'salutation.txt';
const content = 'Testando o arquivo salutation!!!';

module.exports = changingFile;