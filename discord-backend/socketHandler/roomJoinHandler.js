const serverStore = require("../serverStore");
const roomUpdates = require("./updates/room");

const roomJoinHandler = (socket, data) => {
  const { roomId } = data;

  const participantDetails = {
    userId: socket.user.uesrId,
    socketId: socket.id,
  };

  const roomDetails = serverStore.getActiveRoom(roomId);

  serverStore.joinActiveRoom(roomId, participantDetails);

  // send information to users in room that they prepare for incoming connections
  roomDetails.participants.forEach((participant) => {
    if (participant.socketId !== participantDetails.socketId) {
      socket.to(participant.socketId).emit('conn-prepare', {
        connUserSocketId: participantDetails.socketId
      });
    };
  });

  roomUpdates.updateRooms();
};

module.exports = roomJoinHandler;
