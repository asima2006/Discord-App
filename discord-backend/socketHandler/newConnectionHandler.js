const serverStore = require('../serverStore');
const friendsUpdate = require('./updates/friends')

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;
    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.uesrId,
    });

    // Updating pending friends invitation list
    friendsUpdate.updateFriendsPendingInvitations(userDetails.uesrId)

    // update friend List
    friendsUpdate.updateFriends(userDetails.uesrId)

};

module.exports = newConnectionHandler;