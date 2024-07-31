const express = require('express');
const auth = require('../../middlewares/auth');
const router = express.Router();

router.get('/', async (req, res, next) => {
    let brands = await subcategroy.findAll();
    res.status(200).json(brands);
});

module.exports = router;