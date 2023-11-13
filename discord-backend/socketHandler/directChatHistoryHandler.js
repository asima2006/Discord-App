const Conversation = require('../models/conversation');
const chatUpdates = require("./updates/chat");

const directChatHistoryHandler = async (socket, data) => {
    try {
        const { uesrId } = socket.user;
        const { receiverUserId } = data;

        const conversation = await Conversation.findOne({
            participants: { $all: [uesrId, receiverUserId]},
            // type: "DIRECT",
        });

        // console.log(conversation._id);
        // console.log(socket.id);

        if (conversation) {
            chatUpdates.updateChatHistory(conversation._id.toString(), socket.id);
        }

    } catch (error) {
        console.log(error);
    }
};

module.exports = directChatHistoryHandler