const Book = (Sequelize, DataTypes) => {
  const Book = Sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {
    updatedAt: false,
  })
  return Book;
};

module.exports = Book;
