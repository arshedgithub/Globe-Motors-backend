const express = require('express');
require('dotenv').config();

var cors = require('cors');
const http = require('http');

const productsRouter = require('./routes/products/products');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/products', productsRouter);

const server = http.createServer(app);

app.use('/home', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Welcome');
    res.end();
});

const port = process.env.PORT || 3000;
server.listen(port);
console.log(`server listening on port ${port}...`);

module.exports = app;