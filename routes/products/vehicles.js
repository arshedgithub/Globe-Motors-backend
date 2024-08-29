const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const db = require('../../util/connection');
const router = express.Router();

const Vehicle = db.Vehicle;

router.get('/', async (req, res, next) => {
    let vehicles = await Vehicle.findAll();
    res.status(200).json(vehicles);
    next();
});

router.post('/', auth, admin, async (req, res, next) => {
    let vehicle = await Vehicle.create({name: req.body.name});
    res.status(200).json(vehicle);
    next();
});

router.delete('/:id', auth, admin, async (req, res, next) => {
    let vehicle = await Vehicle.destroy({where: {id: req.params.id}});
    res.status(200).json(vehicle + ' deleted');
    next();
});

module.exports = router;