const FriendInvitation = require('../../models/friendInvitation')
const friendsUpdates = require('../../socketHandler/updates/friends')
const User = require('../../models/user')

const postAccept = async (req, res) => {
    try {
        const { id } = req.body
        const invitation = await FriendInvitation.findById(id);

        if (!invitation) {
            return res.status(401).send("Error occured please try again")
        }

        const { senderId, receiverId } = invitation;

        //add friends to both
        const senderUser = await User.findById(senderId);
        senderUser.friends = [...senderUser.friends, receiverId];

        const receiverUser = await User.findById(receiverId);
        receiverUser.friends = [...receiverUser.friends, senderId];

        await senderUser.save();
        await receiverUser.save();

        // delete from invitation list
        await FriendInvitation.findByIdAndDelete(id);

        // update list of friends if they are online
        friendsUpdates.updateFriends(senderId.toString());
        friendsUpdates.updateFriends(receiverId.toString());

        // update list of friends invitation
        friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());

        return res.status(200).send("Friend successfully added");

    } catch (error) {
        console.log(error);
        res.status(500).send('Something went wrong please try again');
    }
}

module.exports = postAccept