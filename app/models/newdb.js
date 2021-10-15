'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 'portaMySQL',
    user     : 'usuarioMySQL',
    password : 'senhaMySQL',
    database : 'dadossaudevacinacao'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
