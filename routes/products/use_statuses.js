const express = require('express');
const db = require('../../util/connection');
const router = express.Router();

const UseStatus = db.category;

router.get('/', async (req, res, next) => {
    let usestatuses = await UseStatus.findAll();
    res.status(200).json(usestatuses);
    next();
});

module.exports = router;