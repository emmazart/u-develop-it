const express = require('express');
const apiRoutes = require('./routes/apiRoutes'); // unwritten end of this filepath is index.js
const db = require('./db/connection');

// const req = require('express/lib/request');
// const res = require('express/lib/response');
// const inputCheck = require('./utils/inputCheck');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiroutes
app.use('/api', apiRoutes);

// // testing connection
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request (not found) / catchall route / must go last
app.use((req, res) => {
    res.status(404).end();
});

// start server after db connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});