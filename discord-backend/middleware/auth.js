const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req, res, next)=>{
    let token = req.body.token || req.query.token || req.headers["auth-token"];

    if (!token) {
        return res.status(403).send("A Token is required for authentication");
    }
    try {
        token = token.replace(/^Bearer\s+/, "");
        const decode = jwt.verify(token, config.TOKEN_KEY);
        token = decode;
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }

    return next();
}

module.exports = verifyToken;