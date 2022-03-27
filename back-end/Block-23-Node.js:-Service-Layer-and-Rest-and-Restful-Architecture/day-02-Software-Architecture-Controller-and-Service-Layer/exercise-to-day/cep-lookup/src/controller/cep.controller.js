const { findCep, findData } = require("../service/cep.services");

const getCep = async (req, res) => {
  const { cep } = req.params;
  const valueCep = await findCep(cep);

  try {
    if (valueCep.success.code === "CEP found") return res.status(200).json(valueCep);
    return res.status(400).json(valueCep);
  } catch (error) {
    res.status(404).json(error);
  }
};

const insetData = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const dataCep = { cep, logradouro, bairro, localidade, uf };
  const resultData = await findData(dataCep);

  try {
  return res.status(resultData.success.status).json(resultData);
  } catch (error) {
    return res.status(resultData.error.status).json(resultData);
  }
};

module.exports = {
  getCep,
  insetData,
};
