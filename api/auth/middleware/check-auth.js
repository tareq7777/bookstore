const jwt = require('jsonwebtoken');
var privateKey = "33fkfkfdokfk";
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, privateKey);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Auth failed' });
    }
};
