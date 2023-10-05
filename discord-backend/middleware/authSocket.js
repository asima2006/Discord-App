const jwt = require('jsonwebtoken');

const config = process.env;

const verifyTokenSocket = (socket, next) => {   
    const token = socket.handshake.auth?.token;
    console.log(token);
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        socket.user = decoded;
        next();
    } catch (err) {
        const socketerror = new Error('NOT_AUTHORIZED');
        return next(socketerror)
    }
};

module.exports = verifyTokenSocket;