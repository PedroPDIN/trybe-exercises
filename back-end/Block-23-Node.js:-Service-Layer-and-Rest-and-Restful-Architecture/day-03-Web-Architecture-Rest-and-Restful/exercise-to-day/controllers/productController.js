const express = require("express");
const ProductModel = require("../models/productModel");

const router = express.Router();

router.get("/products", async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get("/products/:id", async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  try {
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: "'id' not found" });
  }
});

router.post("/user", async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "invalid information" });
  }
});

router.put("/user/:id", async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.update(req.params.id, name, brand);
    res.status(200).json({ success: { name, brand }});
  } catch (error) {
    res.status(400).json({ message: "invalid information or invalid 'id'" });
  }
});

router.delete("/user/:id", async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  try { 
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: "'id' not found" });
  }
});

module.exports = router;
