const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookstore',
    connectionLimit: 10,
});

exports.pool = pool;
