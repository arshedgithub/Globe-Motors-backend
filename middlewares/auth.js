require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[0];
    if (token == null) res.status(401).json("Access Denied. No token found");

    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();        
    } catch (err) {
        res.status(400).json(err);
    } 
}