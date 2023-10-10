const jwt = require('jsonwebtoken');

const config = process.env;

const verifyTokenSocket = (socket, next) => { 
    const token = socket.handshake.query.token;
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        socket.user = decoded;
    } catch (err) {
        const socketerror = new Error('NOT_AUTHORIZED');
        return next(socketerror)
    }
    console.log("Exit");
    
    next();
};

module.exports = verifyTokenSocket;