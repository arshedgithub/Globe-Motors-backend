const express = require('express');
const admin = require('../../middlewares/admin');
const auth = require('../../middlewares/auth');
const category = require('../../models/Product/category');
const router = express.Router();

router.get('/', async (req, res, next) => {
    let categories = await category.findAll();
    res.status(200).json(categories);
});

router.post('/', auth, admin, async (req, res, next) => {
    let categories = await category.findAll();
    res.status(200).json(categories);
});

router.delete('/:id', auth, admin, async (req, res, next) => {
    let category = await category.destroy({where: {id: req.params.id}});
    res.status(200).json(category + ' deleted');
});

module.exports = router;