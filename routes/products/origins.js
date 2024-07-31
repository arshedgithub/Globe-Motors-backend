const express = require('express');
const origin = require('../../models/Product/origin');
const router = express.Router();

router.get('/', async (req, res, next) => {
    let origins = await origin.findAll();
    res.status(200).json(origins);
});

module.exports = router;