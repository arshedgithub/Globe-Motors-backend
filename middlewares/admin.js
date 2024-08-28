require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    console.log(req.user);
    // if (!req.user.role) return res.status(403).send("Access denied." );    
    next();
}