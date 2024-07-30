const express = require('express');
require('dotenv').config();

const app = express();
const jwtoken = require('jsonwebtoken');
var cors = require('cors');
app.use(cors());

// import routes
const productRouter = require('./routes/products/brands');
const categoryRouter = require('./routes/products/categories');
const subcategoryRouter = require('./routes/products/subcategories');
const brandRouter = require('./routes/products/brands');

const userRouter = require('./routes/users');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// product routes
app.use('/api/products', productRouter);
app.use('/api/products/categories', categoryRouter);
app.use('/api/products/subcategories', subcategoryRouter);
app.use('/api/products/brands', brandRouter);

// login routes
app.use('/api/users', userRouter);

// creating server...
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on localhost:${port}`));

module.exports = app;