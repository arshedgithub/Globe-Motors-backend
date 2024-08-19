const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const db = require('../../util/connection');
const router = express.Router();

const Customer = db.Customer;

router.get('/', auth, admin, async (req, res, next) => {
    const customers = await Customer.findAll({
        include: [
            { model: db.CustomerStatus, attributes: { exclude: ['createdAt', 'updatedAt'] }},
            { model: db.Gender, attributes: { exclude: ['createdAt', 'updatedAt']} },
          ],
    });
    res.status(200).json(customers);
    next();
});

router.get('/:id', auth, admin, async (req, res, next) => {
    const product = await Customer.findOne({ where: { id: req.params.id } });
    res.status(200).json(product);
    next();
});

router.put('/:id', auth, admin, async (req, res, next) => {
    const customers = await Customer.update({ where: { id: req.params.id } });
    res.status(200).json(customers);
    next();
});

router.post('/', auth, admin, async (req, res, next) => {
    try {
        let { name, contact, landPhone, email, customerStatusId, genderId } = req.body;
        let new_customer = { name, contact, landPhone, email, customerStatusId, genderId };
        const customer = await Customer.create(new_customer);
        res.status(200).json(customer);
        next();
    } catch (error) {
        res.status(400).json(error.message);
        next();
    }
});

router.delete('/:id', auth, admin, async (req, res, next) => {
    const product = await Customer.destroy({ where: { id: req.params.id } });
    res.status(200).json(product);
    next();
});

module.exports = router;