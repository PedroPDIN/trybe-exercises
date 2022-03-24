const express = require("express");
const bodyParser = require("body-parser");

const { insertUser, getAll, getUserId, getUpdateUser } = require("./model/user");
const { isValidEmail, isValidPassword, isValidName } = require("./middleware/validation")

const POST = 3001;
const app = express();

app.use(bodyParser.json());

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const userId = await getUserId(id);

  if(!userId) return res.status(404).json({ 
    "error": true,
    "message": "Usuário não encontrado"
  });

  try {
    return res.status(200).json(userId);
  } catch (error) {
    return res.status(500).end();
  }
})

app.get("/user", async (_req, res) => {
  const usersData = await getAll();

  try {
    return res.status(201).json(usersData);
  } catch (error) {
    return res.status(500).end();
  }
})

app.post("/user", isValidName, isValidEmail, isValidPassword, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const dataUser = await insertUser(firstName, lastName, email, password)

try {
  return res.status(201).json(dataUser)
} catch (error) {
  return res.status(500).end();
}
});

app.put("/user/:id", isValidName, isValidEmail, isValidPassword, async (req, res) => {
  const { firstName, lastName, email, password} = req.body;
  const { id } = req.params

  const newData = { firstName, lastName, email, password};
  const updateData = await getUpdateUser(id, newData)

  if(!updateData) return res.status(404).json({ 
    "error": true,
    "message": "Usuário não encontrado"
  });

  try {
    return res.status(200).json(updateData)
  } catch (error) {
    return res.status(500).end();
  }
});


app.listen(POST, () => console.log("online..."));
