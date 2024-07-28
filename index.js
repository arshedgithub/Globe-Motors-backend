const express = require('express');
require('dotenv').config();

var cors = require('cors');
const http = require('http');
var mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const server = http.createServer(app);

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(err => {
    if (!err) {
        console.log('database connected...');       
    } else {
        console.log('database error: ' + err.message);
    }
});

app.use('/home', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Welcome');
    res.end();
});

const port = 4000;
server.listen(port);
console.log(`server listening on port ${port}...`);
module.exports = app;