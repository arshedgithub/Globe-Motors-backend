const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const db = require('../../util/connection');
const router = express.Router();

const Origin = db.Origin;

router.get('/', async (req, res, next) => {
    let origins = await Origin.findAll();
    res.status(200).json(origins);
    next();
});

router.post('/', auth, admin, async (req, res, next) => {
    let origins = await Origin.create({name: req.body.name});
    res.status(200).json(origins);
    next();
});

module.exports = router;