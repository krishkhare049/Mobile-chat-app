const Conversation = require("../models/conversationModel"); // Importing the Conversation model
const Message = require("../models/messageModel"); // Importing the Message model

// Get all messages in a conversation
async function getConversationAllMessages(req, res) {
    const skip = parseInt(req.params.skip) || 0;
    const limit = 40;

    const conversationId = req.params.conversationId;

    // Use aggregation to reverse the messageIds array and apply skip/limit
    const conversationMessages = await Conversation.aggregate([
        { $match: { _id: conversationId } }, // Match the specific conversation
        { $project: { messageIds: { $reverseArray: "$messageIds" } } }, // Reverse the messageIds array
        { $unwind: "$messageIds" }, // Unwind to work with individual messages
        { $skip: skip }, // Skip the specified number of messages
        { $limit: limit }, // Limit the results to the specified number
        { 
            $lookup: { // Populate messageIds with actual message data
                from: 'messages', // The messages collection name
                localField: 'messageIds',
                foreignField: '_id',
                as: 'message'
            }
        },
        { $unwind: "$message" } // Unwind to flatten the results
    ]);

    if (conversationMessages) {
        res.send(conversationMessages);
    }
}

// Delete a conversation
async function deleteConversation(req, res) {
    try {
        // Pull conversation from user conversations, don't delete it from conversation because we don't want to remove entire conversation from both participants.
        
    } catch (error) {
        console.log(error);
        res.send('error_occurred');
    }
}

module.exports = { getConversationAllMessages, deleteConversation }; // Exporting the functions