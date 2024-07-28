const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.get('/colors', (req, res, next) => {
    var query = "Select * from color";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err); 
        }
    });
});

router.get('/categories', (req, res, next) => {
    var query = "Select * from category";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err); 
        }
    });
});

router.get('/subcategories', (req, res, next) => {
    var query = "Select * from subcategory";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err); 
        }
    });
});

router.get('/paymentmethods', (req, res, next) => {
    var query = "Select * from payment_method";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err); 
        }
    });
});

module.exports = router;