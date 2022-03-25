const connection = require("./connection");

const getCep = async (cep) => {
  const query = "SELECT * FROM cep_lookup.cep WHERE cep = ?;";
  const [cep] = await connection.execute(query, [cep]);


  return cep;
};

module.exports = {
  getCep,
}
