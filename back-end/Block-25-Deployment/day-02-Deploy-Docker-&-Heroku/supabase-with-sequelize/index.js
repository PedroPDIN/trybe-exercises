const express = require('express');

const { Product } = require('./models');

const app = express()
const post = process.env.POST || 3000;

app.use(express.json());

app.post('/product', async (req, res) => {
    const { name, description } = req.body;

    const product = await Product.create({ name, description })

    return res.status(200).json(product);
});

app.listen(post, () => console.log(`Servidor online na porta ${post}`));
