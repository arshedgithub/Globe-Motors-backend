const express = require('express');
const useStatus = require('../../models/Product/useStatus');
const router = express.Router();

router.get('/', async (req, res, next) => {
    let usestatuses = await useStatus.findAll();
    res.status(200).json(usestatuses);
});

module.exports = router;