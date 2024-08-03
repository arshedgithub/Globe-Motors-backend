const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const db = require('../../util/connection');
const router = express.Router();

const Product = db.products;
// const Category = db.category;

router.get('/', async (req, res, next) => {
    const products = await Product.findAll();
    res.status(200).json(products);
    next();
});

router.get('/:id', async (req, res, next) => {
    const product = await Product.findOne({ where: { id: req.params.id } });
    res.status(200).json(product);
    next();
});

router.put('/:id', auth, admin, async (req, res, next) => {
    const products = await Product.update({ where: { id: req.params.id } });
    res.status(200).json(products);
    next();
});

router.post('/', auth, admin, async (req, res, next) => {
    try {
        let { name, description, photo, review, offer, cost, price, tax, stock, stock_limit_min, stock_limit_max, categoryId, subcategoryId, brandId, vehicleId, originId, useStatusId } = req.body;
        let new_product = { name, description, photo, review, offer, cost, price, tax, stock, stock_limit_min, stock_limit_max, categoryId, subcategoryId, brandId, vehicleId, originId, useStatusId };
        const product = await Product.create(new_product);
        res.status(200).json(product);
        next();
    } catch (error) {
        res.status(400).json(error.message);
        next();
    }
});

router.delete('/:id', auth, admin, async (req, res, next) => {
    const product = await Product.destroy({ where: { id: req.params.id } });
    res.status(200).json(product);
    next();
});

module.exports = router;