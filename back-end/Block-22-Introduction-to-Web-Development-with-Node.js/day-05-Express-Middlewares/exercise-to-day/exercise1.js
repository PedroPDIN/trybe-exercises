const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('users/register/', (req, res) => {
  const { username, email, password} = req.body;
  
})