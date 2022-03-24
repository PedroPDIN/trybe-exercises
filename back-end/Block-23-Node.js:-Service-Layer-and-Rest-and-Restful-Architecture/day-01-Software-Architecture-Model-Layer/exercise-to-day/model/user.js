const connection = require("./connection");

const insertUser = async (firstName, lastName, email, password) => {
  const query = "INSERT INTO model_example.user (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
  const [{ insertId }] = await connection.execute(query, [firstName, lastName, email, password]);

  return {
    id: insertId,
    firstName,
    lastName,
    email,
    password,
  }
};

const getAll = async () => {
  const query = "SELECT * FROM model_example.user";

  const [users] = await connection.execute(query);
  return users
}

const getUserId = async (id) => {
  const query = "SELECT * FROM model_example.user WHERE id = ?";
  const [userId] = await connection.execute(query, [id]);

  if(userId.length === 0) return null;
  return userId;
}

const getUpdateUser = async (id, { firstName, lastName, email, password }) => {
  const query = `UPDATE model_example.user 
  SET firstName = ?, LastName = ?, email = ?, password = ? WHERE id = ?`;

  const [dataUser] = await connection.execute(query, [firstName, lastName, email, password, id]);

  if(dataUser.length === 0) return null;
  return {
    id: Number(id),
    firstName,
    lastName,
    email,
  };

}

module.exports = {
  insertUser,
  getAll,
  getUserId,
  getUpdateUser,
}
