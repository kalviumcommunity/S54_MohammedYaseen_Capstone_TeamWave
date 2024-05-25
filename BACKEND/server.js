// server.js
const express = require('express');
const cors = require('cors');
const routes = require('./route'); // Import the routes
// const DBconnection = require('./DBconnection');
const dotenv = require('dotenv').config();
const app = express();

const port = process.env.PORT || 4000;
console.log('port: ', port);

app.use(express.json());
app.use(cors());

// DBconnection();

app.use('/api', routes); 

app.get('/demo', (req, res) => {
    res.send("hello welcome to teamWave is just the demo of the backend");
});

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
});
