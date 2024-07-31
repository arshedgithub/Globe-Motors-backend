const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const router = express.Router();

const db = require('../../util/connection');
const Product = db.products;

router.get('/', async (req, res, next) => {
    const products = await Product.findAll();
    res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
    const product = await Product.findOne({where: {id: req.params.id}});
    res.status(200).json(product);
});

router.put('/:id', auth, admin, async (req, res, next) => {
    const products = await Product.update({where: {id: req.params.id}});
    res.status(200).json(products);
});

router.post('/', auth, admin, async (req, res, next) => {
    let obj = {
        name: req.body.name,
        description: req.body.description,
        photo: req.body.photo,
        review: req.body.review,
        offer: req.body.offer,
        cost: req.body.cost,
        price: req.body.price,
        tax: req.body.tax,
        stock: req.body.stock,
        stock_limit_min: req.body.stock_limit_min,
        stock_limit_max: req.body.stock_limit_max
    }
    const product = await Product.create(obj);
    res.status(200).json(product);
});

router.delete('/:id', auth, admin, async (req, res, next) => {
    const product = await Product.destroy({where: {id: req.params.id}});
    res.status(200).json(product);
});


module.exports = router;