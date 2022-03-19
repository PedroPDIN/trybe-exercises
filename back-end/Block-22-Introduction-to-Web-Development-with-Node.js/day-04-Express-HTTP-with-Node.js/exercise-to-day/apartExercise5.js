const express = require("express");
const fs = require("fs").promises;
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json())

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

// EXERCÍCIO 8
app.post("/simpsons", async (req, res) => {
  const { id, name } = req.body;
  const dataSimpsons = await fileJson()
  const ids = dataSimpsons.map((v) => v.id)
  const existingId = ids.includes(id)

  if(existingId === true) return res.status(409).json({ 'message': 'id already exists' })

  dataSimpsons.push({ id, name })
  await fs.writeFile('./simpsons.json', JSON.stringify(dataSimpsons))
  res.status(204).end()
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na posta 3001 (simpsons)')
});