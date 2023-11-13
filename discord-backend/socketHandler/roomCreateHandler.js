const serverStore = require('../serverStore');
const roomsUpdates = require('./updates/room')

const roomCreateHandler = (socket) => {
    const socketId = socket.id;
    const userId = socket.user.uesrId;

    const roomDetails = serverStore.addNewActiveRoom(userId, socketId);

    socket.emit('room-create', {
        roomDetails
    });

    roomsUpdates.updateRooms();
    
};

module.exports = roomCreateHandler