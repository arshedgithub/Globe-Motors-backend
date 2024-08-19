const express = require('express');
const auth = require('../../middlewares/auth');
const admin = require('../../middlewares/admin');
const db = require('../../util/connection');
const router = express.Router();

const Supplier = db.Supplier;

router.get('/', auth, admin, async (req, res, next) => {
    const suppliers = await Supplier.findAll({
        include: [
            { model: db.SupplierStatus, attributes: { exclude: ['createdAt', 'updatedAt'] }},
            { model: db.Gender, attributes: { exclude: ['createdAt', 'updatedAt']} },
          ],
    });
    res.status(200).json(suppliers);
    next();
});

router.get('/:id', auth, admin, async (req, res, next) => {
    const supplier = await Supplier.findOne({ where: { id: req.params.id } });
    res.status(200).json(supplier);
    next();
});

router.put('/:id', auth, admin, async (req, res, next) => {
    const suppliers = await Supplier.update({ where: { id: req.params.id } });
    res.status(200).json(suppliers);
    next();
});

router.post('/', auth, admin, async (req, res, next) => {
    try {
        let { name, contact, landPhone, email, address,  supplierStatusId, genderId } = req.body;
        let new_customer = { name, contact, landPhone, email, address, supplierStatusId, genderId };
        const customer = await Supplier.create(new_customer);
        res.status(200).json(customer);
        next();
    } catch (error) {
        res.status(400).json(error.message);
        next();
    }
});

// router.put('/delete/:id', auth, admin, async (req, res, next) => {
//     const suppliers = await Supplier.update({ where: { id: req.params.id } });
//     res.status(200).json(suppliers);
//     next();
// });



module.exports = router;