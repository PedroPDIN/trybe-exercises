const express = require('express');
const BookController = require('./controllers/Book');

const app = express();

app.use(express.json());
const POST = 3001;

app.get('/books', BookController.getAll);
app.get('books/:id', BookController.getById);
app.post('/book', BookController.create);
app.put('/book/:id', BookController.update);
app.delete('/book/:id', BookController.deleteBook);

app.listen(POST, () => {
    console.log('online...')
});