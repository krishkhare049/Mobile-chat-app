const Message = require('../models/messageModel');
const Conversation = require('../models/conversationModel');
const User = require('../models/userModel');

async function getMessages(req, res) {
}


async function addMessage(req, res) {
    try {

        // const {participants, message} = req.body;
        const sender = req.user_id;
        const receiver = req.body.receiver;
        const participants = [sender, receiver];
        const message = req.body.message;

        const currentMessage = new Message({ sender: sender, receiver: receiver, text: message });
        const saveCurrentMessage = await currentMessage.save();
        const currentMessageId = saveCurrentMessage._id;

        // Also add size operator here to check if only two exists or not
        const checkIfConversationExists = await Conversation.findOne({ participants: { $all: participants } }, { _id: 1 });
        console.log(checkIfConversationExists)
        if (!checkIfConversationExists) {

            console.log('No conversation found. Creating a new conversation!');
            const newConversation = new Conversation({ participants: participants, otherParticipant: receiver, messageIds: [currentMessageId] });

            let newConversationSave = await newConversation.save();

            // Add this newConversation id in user conversation field also set last updated time

            // We can use updateOne because it is more efficient but it is not working currently.
            // const updateSender = await User.findOneAndUpdate({ _id: sender }, { $addToSet: { conversations: { conversationId: newConversationSave.id, otherParticipant: receiver, lastUpdated: Date.now(), lastMessage: message } } });
            // const updateReceiver = await User.findOneAndUpdate({ _id: receiver }, { $addToSet: { conversations: { conversationId: newConversationSave.id, otherParticipant: sender, lastUpdated: Date.now(), lastMessage: message } } });
            const updateSender = await User.updateOne({ _id: sender }, { $addToSet: { conversations: { conversationId: newConversationSave.id, otherParticipant: receiver, lastUpdated: Date.now(), lastMessage: message } } });
            const updateReceiver = await User.updateOne({ _id: receiver }, { $addToSet: { conversations: { conversationId: newConversationSave.id, otherParticipant: sender, lastUpdated: Date.now(), lastMessage: message } } });

            // if (updateSender && updateReceiver) {
                res.send('message_added_successfully');
            // };

        }
        else {
            console.log('Conversation found. Add message to existing conversation!');
            const addMessageInConversation = await Conversation.updateOne({ _id: checkIfConversationExists.id }, { $addToSet: { messageIds: currentMessageId } });

            // TODO-
            // Update existing conversation element lastUpdated and lastMessage field.
            // const updateSender = await User.updateOne({ _id: sender }, {
            // const updateSender = await User.findOneAndUpdate({ _id: sender }, {
            //     $set: {
            //         otherParticipant: receiver, lastUpdated: Date.now(), lastMessage: message
            //     }
            // });

            const updateSender = await User.updateOne(
                { _id: sender, 'conversations.conversationId': checkIfConversationExists._id },
                { $set: { 'conversations.$.lastUpdated': Date.now(), 'conversations.$.lastMessage': message } }
            );

            if (updateSender.nModified > 0) {
                console.log('Sender conversation updated successfully.');
            }


            // const updateReceiver = await User.findOneAndUpdate({ _id: receiver }, {
            //     $set: {
            //         otherParticipant: sender, lastUpdated: Date.now(), lastMessage: message
            //     }
            // });

            const updateReceiver = await User.updateOne(
                { _id: receiver, 'conversations.conversationId': checkIfConversationExists._id },
                { $set: { 'conversations.$.lastUpdated': Date.now(), 'conversations.$.lastMessage': message } }
            );

            if (updateReceiver.nModified > 0) {
                console.log('Receiver conversation updated successfully.');
            }

            // if (updateSender && updateReceiver) {
                res.send('message_added_successfully');
            // };


        }

    } catch (error) {
        console.log(error);
        res.send('error_occurred');
    };
};

module.exports = { getMessages, addMessage }; // Exporting the functions