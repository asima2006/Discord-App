const Message = require('../models/message');
const Conversation = require('../models/conversation');
const chatUpdates = require("./updates/chat");


const directMessageHandler = async (socket, data) => {
    try {
        console.log("Working");
        const { uesrId } = socket.user;
        const { receiverUserId, content } = data;

        const message = await Message.create({
            content: content,
            author: uesrId,
            date: new Date(),
            type: "DIRECT"
        });

        // check if conversation exist with this two users
        const conversation = await Conversation.findOne({
            participants: {$all: [uesrId, receiverUserId]},
        });
        
        if (conversation) {
            conversation.messages.push(message._id);
            await conversation.save();
            
            // perform and update to sender and receiver if is online
            chatUpdates.updateChatHistory(conversation._id.toString());
          } else {
            // create new conversation if not exists
            const newConversation = await Conversation.create({
              messages: [message._id],
              participants: [uesrId, receiverUserId],
            });
      
            // perform and update to sender and receiver if is online
            chatUpdates.updateChatHistory(newConversation._id.toString());
          }
        

    } catch (error) {
        
    }
}

module.exports = directMessageHandler