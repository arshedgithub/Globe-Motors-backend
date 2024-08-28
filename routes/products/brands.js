const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const db = require('../../util/connection');
const router = express.Router();

const Brand = db.Brand;

router.get('/', async (req, res, next) => {
    let brands = await Brand.findAll();
    res.status(200).json(brands);
    next();
});

router.post('/', auth, admin, async (req, res, next) => {
    let brands = await Brand.create({name: req.body.name});
    res.status(200).json(brands);
    next();
});

router.delete('/:id', auth, admin, async (req, res, next) => {
    let brand = await Brand.destroy({where: {id: req.params.id}});
    res.status(200).json(brand + ' deleted');
    next();
});

module.exports = router;