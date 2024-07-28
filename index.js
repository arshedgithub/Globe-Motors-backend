const express = require('express');
require('dotenv').config();

const app = express();
var cors = require('cors');
app.use(cors());

// import routes
const productRouter = require('./routes/products/products');
const colorRouter = require('./routes/products/colors');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
app.use('/api/products', productRouter);
app.use('/api/products', colorRouter);

// creating server...
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on localhost:${port}`));

module.exports = app;