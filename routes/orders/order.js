const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const db = require('../../util/connection');
const router = express.Router();

const Order = db.Order;

router.get('/', auth, admin, async (req, res, next) => {
    try {
        const products = await Order.findAll();
        res.status(200).json(products);
        next();
    } catch (error) {
        res.status(400).json(error.message);
        next();
    }
});

router.post('/', auth, async (req, res, next) => {
    try {
        let { name, description, photo, review, offer, cost, price, tax, stock, stock_limit_min, stock_limit_max, categoryId, subcategoryId, brandId, vehicleId, originId, useStatusId } = req.body;
        let new_product = { name, description, photo, review, offer, cost, price, tax, stock, stock_limit_min, stock_limit_max, categoryId, subcategoryId, brandId, vehicleId, originId, useStatusId };
        const product = await Order.create(new_product);
        res.status(200).json(product);
        next();
    } catch (error) {
        res.status(400).json(error.message);
        next();
    }
});