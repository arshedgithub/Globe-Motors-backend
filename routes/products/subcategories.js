const express = require('express');
const connection = require('../../connection');
const admin = require('../../middlewares/admin');
const auth = require('../../middlewares/auth');
const router = express.Router();

router.get('/', (req, res, next) => {
    var query = "Select * from subcategory";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err); 
        }
    });
});

module.exports = router;