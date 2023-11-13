const serverStore = require('../serverStore');
const roomLeaveHandler = require('./roomleaveHandler');

const disconnectHandler = (socket) => {
    const activeRooms = serverStore.getActiveRooms();

    activeRooms.forEach(activeRoom => {
        const roomLeave = activeRoom.participants.some(
            (participants) => participants.socketId === socket.id
        );

        if (roomLeave) {
            roomLeaveHandler(socket, {roomId: activeRoom.roomId});
        }
    })

    serverStore.removeConnectedUser(socket.id);
}

module.exports = disconnectHandler;