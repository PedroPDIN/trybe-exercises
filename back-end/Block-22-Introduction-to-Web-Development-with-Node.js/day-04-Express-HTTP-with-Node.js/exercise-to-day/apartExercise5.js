const express = require("express");
const fs = require("fs").promises;
// const bodyParser = require("body-parser")

const app = express();

const fileJson = () => {
  return fs.readFile("./simpsons.json", "utf-8")
  .then((data) => JSON.parse(data))
};

app.get("/", async (req, res) => {
  const dataSimpsons = await fileJson()

  try {
    res.status(200).json(dataSimpsons);
  } catch (error) {
    res.status(500).json({ "message": "Internal Server Error" })
  }
});

// EXERCÍCIO 6
app.get("/simpsons", async (req, res) => {
  const dataSimpsons = await fileJson()
  const simpsons = dataSimpsons.filter(({ name }) => name.split(' ')[1] === 'Simpson')

  try {
    res.status(200).json(simpsons);
  } catch (error) {
    res.status(500).json({ "message": "Internal Server Error" })
  }
});


// EXERCÍCIO 7
app.get("/simpsons/:id", async (req, res) => {
  const { id } = req.params;
  const dataSimpsons = await fileJson()
  const simpsons = dataSimpsons.filter(({ name }) => name.split(' ')[1] === 'Simpson');
  const simpsonsId = simpsons.find(({ id: idSimpson }) => idSimpson === id) 

  if(id > simpsons.length) {
    return res.status(404).json({ "message": "simpson not found" });
  } else {
    return res.status(200).json(simpsonsId);
  }
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na posta 3001 (simpsons)')
});