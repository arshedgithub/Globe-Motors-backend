const express = require('express');
const connection = require('../../connection');
const admin = require('../../middlewares/admin');
const auth = require('../../middlewares/auth');
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

router.delete('/colors/:id', auth, admin, (req, res, next) => {
    const id = req.params.id;
    var query = "Delete from product where id=?";
    connection.query(query, [id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0){
                return res.status(404).json({message: "Product id does not found."});
            }
            return res.status(200).json({message: "Product updated successfully."});
        } else {
            return res.status(500).json(err);
        }
    });
});

module.exports = router;