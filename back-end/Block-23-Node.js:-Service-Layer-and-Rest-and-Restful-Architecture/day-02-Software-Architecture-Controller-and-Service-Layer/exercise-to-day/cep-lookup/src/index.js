const express = require('express')
const { ping } = require('../controller/ping.controller')

const app = express()

app.use(express.json());

app.get('/ping', ping);

const POST = 3000;
app.listen(POST, () => console.log('ONLINE...'));
