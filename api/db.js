const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookstore'
});

connection.connect(function(err){

    if (err){
        console.log('Error Connection', err);
        throw err;
    }
    console.log('Conneceted');
});
module.exports = connection;