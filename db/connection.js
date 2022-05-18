var mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root', // your MySQL username
        password: '', // your MySQL password
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
