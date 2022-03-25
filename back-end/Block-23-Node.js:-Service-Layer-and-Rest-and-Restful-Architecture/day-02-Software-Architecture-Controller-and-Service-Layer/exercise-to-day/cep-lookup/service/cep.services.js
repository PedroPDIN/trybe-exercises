const { getCep } = require("../models/cep.model");

const findCep = async (cep) => {
  const RGX = /\d{5}-?\d{3}/;
  const boolValid = RGX.test(cep);
  const valueCep = await getCep(cep);

  if (boolValid === false) {
    return { error: { code: "invalidData", message: "CEP inválido" } };
  }

  if (valueCep.length === 0) {
    return { error: { code: "notFound", message: "CEP não encontrado" } };
  }

  return valueCep
};

module.exports = {
  findCep,
}
