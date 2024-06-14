// Example using Express.js
const express = require('express');
const app = express();
const fs = require('fs');


// Example defining a route in Express
app.get('/', (req, res) => {
    // Load index.html file 
    res.sendFile(__dirname + '/frontend/index.html');
});

app.get('/README.txt', (req, res) => {
    const filePath = 'README.txt';
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error al leer el archivo');
            return;
        }
        res.send(data);
    });
});

// Include route files
const usersRoute = require('./routes/users');
const apiRoute = require('./routes/api');

// Use routes
app.use('/users', usersRoute);
app.use('/api', apiRoute);


// Example specifying the port and starting the server
const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
