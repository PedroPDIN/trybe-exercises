const { Book } = require("../models");

const getAll = async (_req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo não esta certo.' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookId = await Book.findBuPk(id);
    return res.status(200).json(bookId)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo não esta certo.' });
  }
}

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(200).json(newBook)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo não esta certo.' });
  }
}

const update = async (req, res) => {
  const { id } = req.headers;
  const { title, author, pageQuantity } = req.body;

  try {
    const bookId = await Book.getById(id);
    if(!bookId) return res.status(401).json({ message: 'id not found' });

    await Book.update({ title, author, pageQuantity }, { where: { id } });
    return res.status(200).json(bookId)
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo não esta certo.' });
  }
}

const deleteBook = async (req, res) => {
  const { id } = req.headers;

  try {
    const destroy = await Book.destroy(id);
    if(!destroy) return res.status(401).json({ message: 'id not found' });
    return res.status(200).json({ message: 'Book deletado' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo não esta certo.' });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteBook,
};
