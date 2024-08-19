const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const db = require('../../util/connection');
const router = express.Router();

const Gender = db.Gender;

router.get('/', async (req, res, next) => {
    let genders = await Gender.findAll();
    res.status(200).json(genders);
    next();
});

module.exports = router;