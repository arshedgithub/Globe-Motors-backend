const express = require('express');
const admin = require('../../middlewares/admin');
const auth = require('../../middlewares/auth');
const db = require('../../util/connection');
const router = express.Router();

const Subcategory = db.Subcategory;

router.get('/', async (req, res, next) => {
    let subcategories = await Subcategory.findAll({
        include: [
            { model: db.Category },
        ]
    });
    res.status(200).json(subcategories);
    next();
});

router.post('/', auth, admin, async (req, res, next) => {
    let obj = {
        name: req.body.name,
        categoryId: req.body.categoryId
    }
    let subcategory = await Subcategory.create(obj);
    res.status(200).json(subcategory);
    next();
});

router.delete('/:id', auth, admin, async (req, res, next) => {
    let subcategory = await Subcategory.destroy({ where: { id: req.params.id } });
    res.status(200).json(subcategory + ' deleted');
    next();
});

module.exports = router;