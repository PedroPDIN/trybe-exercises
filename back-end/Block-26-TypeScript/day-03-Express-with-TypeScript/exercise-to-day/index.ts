import express from 'express';
import route from './src/routes/user.route';

const app = express();
app.use(express.json())

app.use('/users', route)

app.listen(3000, () => console.log('Online...'))