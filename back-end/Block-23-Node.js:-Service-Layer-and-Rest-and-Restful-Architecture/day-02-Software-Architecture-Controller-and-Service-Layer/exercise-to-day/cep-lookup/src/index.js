const express = require('express');
const { ping } = require('./controller/ping.controller');
const { getCep, insetData } = require('./controller/cep.controller');
const { isValid } = require('./middleware/isValid');

const app = express()

app.use(express.json());

app.get('/ping', ping);
app.get('/cep/:cep', getCep);
app.post('/cep', isValid, insetData);

const POST = 3000;
app.listen(POST, () => console.log('ONLINE...'));
