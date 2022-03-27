const { findCep, findData } = require("../service/cep.services");

const getCep = async (req, res) => {
  const { cep } = req.params;
  const valueCep = await findCep(cep);

  try {
    if (valueCep.code === "CEP found") return res.status(200).json(valueCep);
    return res.status(400).json(valueCep);
  } catch (error) {
    res.status(404).json(error);
  }
};

const insetData = async (req, res) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const dataCep = { cep, logradouro, bairro, localidade, uf };
  const { error, success } = await findData(dataCep);

  try {
    if (success) return res.status(201).json(infoData)
    if (error) return res.status(400).json(infoData);
  } catch (error) {
    res.status(500).end();
  }
};

module.exports = {
  getCep,
  insetData,
};
