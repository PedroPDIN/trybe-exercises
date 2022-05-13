import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  user: process.env.DATABASE_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
});
