const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host : 'localhost', 
    user : 'pedro',
    password: 'pedro12345', 
    database : 'cep_lookup',
});

module.exports = connection;
