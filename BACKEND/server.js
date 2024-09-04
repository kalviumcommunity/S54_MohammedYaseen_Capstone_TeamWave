const express = require('express');
const cors = require('cors');
const routes = require('./route');
const dotenv = require('dotenv').config();
const app = express();
const connectToDb = require("./DBconnection")


const port = process.env.PORT || 4000;
console.log('port: ', port);

app.use(express.json());
app.use(cors());
connectToDb()

app.use('/api', routes);

app.get('/demo', (req, res) => {
    res.send("hello welcome to teamWave is just the demo of the backend");
});

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
});
