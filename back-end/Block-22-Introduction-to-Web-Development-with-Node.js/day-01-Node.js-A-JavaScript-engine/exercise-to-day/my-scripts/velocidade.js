const { questionInt } = require('readline-sync');

const velocidadeMedia = () => {
    const distancia = questionInt('Qual é a distancia (m) ? ');
    const tempo = questionInt('Qual é o tempo (s) ? ');
    const resultMedia = distancia / tempo;
    return `Velocidade Média = ${resultMedia.toFixed(2)}.`
}
console.log(velocidadeMedia())