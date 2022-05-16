const express = require('express');
var mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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


// testing connection
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (not found) / catchall route / must go last
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});