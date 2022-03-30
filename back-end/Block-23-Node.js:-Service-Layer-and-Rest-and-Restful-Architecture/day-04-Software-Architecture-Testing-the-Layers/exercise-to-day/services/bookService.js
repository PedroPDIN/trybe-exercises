const MoviesModel = require('../models/movieModel');

const isValid = (id) => {
    if (!id || typeof title !== 'number') return false;

    return true;
  };
  
const getById = async (id) => {
  const isBookValid = isValid(id)

  if(!isBookValid) return null;

  const result = await MoviesModel.getById(id);

  return result;
};

module.exports = {
  getById,
};
