const express = require('express');
require('dotenv').config();

const app = express();
var cors = require('cors');
app.use(cors());

// import routes
const categoryRouter = require('./routes/products/categories');
const subcategoryRouter = require('./routes/products/subcategories');
const brandRouter = require('./routes/products/brands');
const originRouter = require('./routes/products/origins');
const useStatusRouter = require('./routes/products/use_statuses');
const vehicleRouter = require('./routes/products/vehicles');
const productRouter = require('./routes/products/');
const userRouter = require('./routes/users');
const orderRouter = require('./routes/orders/order');

if (!process.env.ACCESS_TOKEN_SECRET) {
    console.error("FATAL ERROR : JWT secret is not defined");
    process.exit(1);
}  
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// product routes
app.use('/api/products/categories', categoryRouter);
app.use('/api/products/subcategories', subcategoryRouter);
app.use('/api/products/brands', brandRouter);
app.use('/api/products/origins', originRouter);
app.use('/api/products/vehicles', vehicleRouter);
app.use('/api/products/usestatuses', useStatusRouter);
app.use('/api/products', productRouter);

// login routes
app.use('/api/users', userRouter);

// order routes
app.use('/api/orders', orderRouter);

// creating server...
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on localhost:${port}`));

module.exports = app;