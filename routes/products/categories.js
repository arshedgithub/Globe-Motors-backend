const express = require('express');
const admin = require('../../middlewares/admin');
const auth = require('../../middlewares/auth');
const db = require('../../util/connection');
const router = express.Router();

const Category = db.Category;

router.get('/', async (req, res, next) => {
    let categories = await Category.findAll();
    res.status(200).json(categories);
    next();
});

router.post('/', auth, admin, async (req, res, next) => {
    let categories = await Category.create({name: req.body.name});
    res.status(200).json(categories);
    next();
});

router.delete('/:id', auth, admin, async (req, res, next) => {
    let category = await Category.destroy({where: {id: req.params.id}});
    res.status(200).json(category + ' deleted');
    next();
});

module.exports = router;