const express = require('express');
const vehicle = require('../../models/Product/vehicle');
const router = express.Router();

router.get('/', async (req, res, next) => {
    let vehicle = await vehicle.findAll();
    res.status(200).json(vehicle);
});

module.exports = router;