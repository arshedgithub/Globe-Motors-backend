const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const db = require('../../util/connection');
const router = express.Router();

const CustomerStatus = db.CustomerStatus;

router.get('/', async (req, res, next) => {
    let statuses = await CustomerStatus.findAll();
    res.status(200).json(statuses);
    next();
});

module.exports = router;