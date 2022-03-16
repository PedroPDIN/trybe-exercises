const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json())

app.get("/ping", (req, res) => {
  return res.status(200).json({ message: 'pong'})
});

/* app.post("/hello", (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}!` })
}) */

/* app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
}) */

app.listen(3000, () => console.log("Rodando da aplicação da posta 3000"));
