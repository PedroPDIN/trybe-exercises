const calc = (n) => {
  if(typeof n === 'string') return 'o valor deve ser um número';
  if(n === 0) return 'neutro';
  if(n > 0) return 'positivo';
  return 'negativo'
};

module.exports = calc;