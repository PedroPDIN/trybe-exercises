import express from 'express';
import userRoute from './src/routes/user.route';

const app = express();
app.use(express.json())

app.use('/users', userRoute)

app.listen(3000, () => console.log('Online...'))