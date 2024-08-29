const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const connection = require('../../util/connection');
const admin = require('../../middlewares/admin');
const auth = require('../../middlewares/auth');
const db = require('../../util/connection');
const router = express.Router();

const User = db.User;

router.get('/', auth, admin, async (req, res, next) => {
    const users = await User.findAll({exclude: ['password']});
    res.status(200).json(users);
    next();
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

router.post('/auth/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // In future implementation,
    // use bcrypt and hash of passwords
    // (visit vidly backend)
    // use role from user table in jwt payload

    const user = await User.findOne({ where: { username: username, password: password}});

    if (username == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD) {
        const userPayload = { username: username, isAdmin: true, user: "admin" }
        const accessToken = jwt.sign(userPayload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "3h", algorithm: "HS512" });
        res.json({ accessToken });

    } else if (user){
        const userPayload = { username: username, isAdmin: false, user: user.id }
        const accessToken = jwt.sign(userPayload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "3h", algorithm: "HS512" });
        res.json({ userPayload, accessToken });
    } else {
        res.status(401).json({ message: "Invalid username or password." });
    }
});

router.post('/auth/signup', async (req, res, next) => {
    try {
        const { username, name, password, email, address, contact } = req.body;
        const new_user = { username, name, password, email, address, contact };
        const user = await User.create(new_user);
        res.status(200).json({username: user.username, name: user.name, contact: user.contact});
        next();
    } catch (error) {
        res.status(400).json(error.message);
        next();
    }
});

module.exports = router;