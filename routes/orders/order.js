const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const db = require('../../util/connection');
const router = express.Router();

const Order = db.Order;

router.get('/', auth, admin, async (req, res, next) => {
    try {
        const orders = await Order.findAll({
            include: [
                { model: db.Product, attributes: { exclude: ['createdAt', 'updatedAt'] } },
                { model: db.User, attributes: { exclude: ['createdAt', 'updatedAt', 'password'] } },
            ],
        });
        res.status(200).json(orders);
        next();
    } catch (error) {
        res.status(400).json(error.message);
        next();
    }
});

router.get('/:userId', auth, admin, async (req, res, next) => {
    try {
        const orders = await Order.find({
            where: {
                userId: req.params.userId
            }
        });
        res.status(200).json(orders);
        next();
    } catch (error) {
        res.status(400).json(error.message);
        next();
    }
});

router.post('/', auth, async (req, res, next) => {
    try {
        let { quantity, total, userId, productId } = req.body;
        let new_order = { quantity, total, userId, productId }
        const order = await Order.create(new_order);
        res.status(200).json(order);
        next();
    } catch (error) {
        res.status(400).json(error.message);
        next();
    }
});

module.exports = router;
