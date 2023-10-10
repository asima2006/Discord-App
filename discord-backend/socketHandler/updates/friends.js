const User = require('../../models/user');
const friendInvitation = require('../../models/friendInvitation');
const serverStore = require('../../serverStore');

const updateFriendsPendingInvitations = async (userId) => {
    try {
        const pendingInvitations = await friendInvitation.find({
            receiverId: userId
        }).populate('senderId', '_id mail username');

        const receiverList = serverStore.getActiveConnection(userId);
        
        const io = serverStore.getSocketServerInstance();

        receiverList.forEach((receiverSocketId) => {
            io.to(receiverSocketId).emit("friend-invitations", {
                pendingInvitations: pendingInvitations ? pendingInvitations : [],
            })
        })

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateFriendsPendingInvitations,
}