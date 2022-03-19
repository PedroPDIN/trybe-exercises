const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json())

// EXERCÍCIO 1
app.get("/ping", (req, res) => {
  return res.status(200).json({ message: 'pong'})
});

// EXERCÍCIO 2
app.post("/hello", (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}!` })
})

// EXERCÍCIO 3
app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  const AVG_AGE = 17;

  if(age > AVG_AGE) return res.status(200).json({ "message": `Hello, ${name}`});
  else return res.status(401).json({ "message": "Unauthorized" })
})

// EXERCÍCIO 4
app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade`})
})


app.listen(3000, () => console.log("Rodando da aplicação da posta 3000"));
