const serverStore = require("../serverStore");
const roomUpdates = require("./updates/room");

const roomleaveHandler = (socket, data) => {
  const { roomId } = data;

  const activeRooms = serverStore.getActiveRoom(roomId);

  if (activeRooms) {
    serverStore.leaveActiveRoom(roomId, socket.id);

    const updatedActiveRoom = serverStore.getActiveRoom(roomId);

    if (updatedActiveRoom) {
      updatedActiveRoom.participants.forEach((participant) => {
        socket.to(participant.socketId).emit('room-participants-list', {
          connUserSocketId: socket.id,
        });
      });
    };
    roomUpdates.updateRooms();
  };
};

module.exports = roomleaveHandler;
