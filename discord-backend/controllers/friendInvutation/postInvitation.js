const User = require('../../models/user');
const FriendInvitation = require('../../models/friendInvitation')

const postInvitation = async (req, res) => {
    try {
        const { targetMailAddress } = req.body;
        const { uesrId, mail } = req.user;
        // console.log(mail);
        // console.log(uesrId);

        if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
            return res.status(409).send("Sorry you cannot become friend to yourself")
        };

        const targetUser = await User.findOne({
            mail: targetMailAddress.toLowerCase(),
        });
        // console.log(targetUser);

        if (!targetUser) {
            return res.status(404).send(`Friend with e-mail addresss ${targetMailAddress} has not found. Please check e-mail address`)
        };

        const invitationAlreadyReceived = await FriendInvitation.findOne({
            senderId: uesrId,
            receiverId: targetUser._id
        });

        if (invitationAlreadyReceived) {
            return res.status(409).send("Invitation has been already sent");
        }

        const userAlreadyFriends = targetUser.friends.find(
            (friendId) => friendId.toString() === uesrId.toString()
        );

        if (userAlreadyFriends) {
            return res.status(409).send("Friends already exist. Please check friend list");
        }

        // create new invitation
        const newInvitation = await FriendInvitation.create({
            senderId: uesrId,
            receiverId: targetUser._id,
        });

        return res.status(201).send("Invitation has been sent");
    }
    catch (error) {
       res.status(500).send("Somtheing went erong, Please try again");
   }
}

module.exports = postInvitation;