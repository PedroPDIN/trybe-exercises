const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host : 'localhost', 
    usuário : 'pedro',
    password: 'pedro12345', 
    database : 'cep-lookup', 
});

module.exports = connection;
