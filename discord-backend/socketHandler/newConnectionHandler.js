const serverStore = require('../serverStore');

const newConnectionHandler = async (socket, io) => {
    const userDetails = req.user;
    console.log();
    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId,
    });
};

module.exports = newConnectionHandler;