const connection = require("./connection");
const Author = require("./author")

/* const getByAuthorId = (id) => {
const query = "SELECT * FROM model_example.books WHERE author_id = ?;"

const [authorBook] = await connection.execute(query, [id])

if (authorBook.length === 0) return null;

return authorBook;
}
 */

const isValidBook = async ({ title, author_id }) => {
  if(!title || title.length < 3) return false;
  if(!author_id || !(await Author.findById(author_id))) return false;

  return true;
}

const insertBook = async (title, author_id) => {
  const query = "INSERT INTO model_example.books (title, author_id) VALUES (?,?)"

  connection.execute(query, [title, author_id])
};

const bookId = async (id) => {
  const query = "SELECT * FROM model_example.books WHERE id = ?"
  const [bookId] = await connection.execute(query, [id]);

  if(bookId.length === 0) return null;
  return bookId;
}

const getAll = async () => {
  const [books] = await connection.execute(
   "SELECT * FROM model_example.books;"
  );
  
  return books
};

module.exports = {
  getAll,
  bookId,
  isValidBook,
  insertBook
};