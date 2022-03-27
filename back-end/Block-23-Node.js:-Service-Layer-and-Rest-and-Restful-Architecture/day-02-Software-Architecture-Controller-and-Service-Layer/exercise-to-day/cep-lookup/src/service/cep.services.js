const { getCep, insertDataCep } = require("../models/cep.model");

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

  return { success: { code: "CEP found", valueCep } };
};

const findData = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const data = { cep, logradouro, bairro, localidade, uf };
  const RGX = /\d{5}-\d{3}/;
  const boolValid = RGX.test(cep);
  const valueCep = await getCep(cep)
  const newDataCep = await insertDataCep(data)

  if(valueCep.length === 0) {
    return { "error": { "code": "alreadyExists", "message": "CEP já existente" } }
  }

  if(boolValid === false) {
    return { "error": { "code": "invalidData", message: "CEP inválido" } };
  }

  return { "success": { "code": "created", newDataCep } };
}

module.exports = {
  findCep,
  findData,
};
