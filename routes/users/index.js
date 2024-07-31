const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const connection = require('../../util/connection');
const admin = require('../../middlewares/admin');
const auth = require('../../middlewares/auth');
const router = express.Router();

router.get('/', auth, admin, (req, res, next) => {
    var query = "Select * from gm_user";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        } else {
            return res.status(500).json(err); 
        }
    });
});

// router.get('/me', auth, admin, (req, res, next) => {
//     const id = req.params.id;
//     var query = "Select * from gm_user where id=?";
//     connection.query(query, [id], (err, results) => {
//         if (!err) {
//             if (results.affectedRows == 0){
//                 return res.status(404).json({message: "User Id does not found."});
//             }
//             return res.status(200).json(results);
//         } else {
//             return res.status(500).json(err);
//         }
//     });
// });

router.post('/auth/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // const role = req.body.role;

    // In future implementation,
    // use bcrypt and hash of passwords
    // (visit vidly backend)
    // use role from user table in jwt payload

    if (username == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD) {
        const user = { username: username }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "3h", algorithm: "HS512"});
        res.json({accessToken});
    } else {
        res.status(401).json({message: "Invalid username or password."});
    }
});

// router.post('/auth/signup', (req, res) => {
//     const username = req.body.username;
//     const user = {name: username}
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "2h"});
//     res.json({accessToken});
// });

module.exports = router;