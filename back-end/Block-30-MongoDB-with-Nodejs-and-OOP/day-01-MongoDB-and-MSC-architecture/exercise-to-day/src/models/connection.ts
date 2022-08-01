import { connect } from 'mongoose';

const connection = (db: string) => {
  try {
    connect(`mongodb://localhost:27017/${db}`)
    console.log(`Conectado ao banco de dados: ${db}`);
  } catch (error) {
    console.log(error)
  }
};

export default connection;
