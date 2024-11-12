const Message = require('../models/messageModel');
const Conversation = require('../models/conversationModel');
const User = require('../models/userModel');

async function getMessages(req, res) {
}


async function addMessage(req, res) {
    try {

        // const {participants, message} = req.body;
        const sender = req.userId;
        const receiver = req.body.receiver;
        const participants = [sender, receiver];
        const message = req.body.message;

        const currentMessage = new Message({ sender: sender, receiver: receiver, message: message });
        const saveCurrentMessage = await currentMessage.save();
        const currentMessageId = saveCurrentMessage._id;

        const checkIfConversationExists = await Conversation.findOne({ participants: { $all: participants } }, { _id: 1 });
        if (!checkIfConversationExists) {

            console.log('No conversation found. Creating a new conversation!');
            const newConversation = new Conversation({ participants: participants, otherParticipant: receiver, messageIds: [currentMessageId] });

            let newConversationSave = await newConversation.save();

            // Add this newConversation id in user conversation field also set last updated time
            const updateUser = await User.updateOne({ _id: sender }, { $addToSet: { conversations: { conversationId: newConversationSave.id, lastUpdated: Date.now, lastMessage: message } } });

            if (updateUser) {
                res.send('message_added_successfully!');
            };

        }
        else {
            console.log('Conversation found. Add message to existing conversation!');
            const addMessageInConversation = await Conversation.findOneAndUpdate({ _id: checkIfConversationExists.id }, { $addToSet: { messageIds: currentMessageId } }, { new: true });

            // Update existing conversation element lastUpdated and lastMessage field.
            const updateUser = await User.updateOne({ _id: sender }, {
                $set: {
                    lastUpdated: Date.now, lastMessage: message
                }
            });

            if (updateUser) {
                res.send('message_added_successfully!');
            };


        }

    } catch (error) {
        console.log(error);
        res.send('error_occurred');
    };
};

module.exports = { getMessages, addMessage }; // Exporting the functions