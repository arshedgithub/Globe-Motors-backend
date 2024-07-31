const express = require('express');
const admin = require('../../middlewares/admin');
const auth = require('../../middlewares/auth');
const subcategroy = require('../../models/Product/subcategroy');
const router = express.Router();


router.get('/', async (req, res, next) => {
    let subcategories = await subcategroy.findAll();
    res.status(200).json(subcategories);
});

router.post('/', auth, admin, async (req, res, next) => {
    let subcategories = await subcategroy.findAll();
    res.status(200).json(subcategories);
});

router.delete('/:id', auth, admin, async (req, res, next) => {
    let subcategory = await subcategroy.destroy({where: {id: req.params.id}});
    res.status(200).json(subcategory + ' deleted');
});


module.exports = router;