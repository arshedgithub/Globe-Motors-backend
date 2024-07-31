const express = require('express');
const connection = require('../../util/connection');
const auth = require('../../middlewares/auth');
const router = express.Router();

router.get('/', (req, res, next) => {
    var query = "Select * from gm_product";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err); 
        }
    });
});

module.exports = router;