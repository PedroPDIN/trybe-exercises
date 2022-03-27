const Joi = require("joi");

const isValid = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const dataBody = { cep, logradouro, bairro, localidade, uf };

  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({ cep, logradouro, bairro, localidade, uf })

  if (error)
    return res
      .status(400)
      .json({ error: { code: "invalidData", message: error } });

      next();
};

module.exports = {
  isValid,
}
