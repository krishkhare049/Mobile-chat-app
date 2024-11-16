const { default: mongoose } = require("mongoose");
const Conversation = require("../models/conversationModel"); // Importing the Conversation model
const Message = require("../models/messageModel"); // Importing the Message model

// Get all messages in a conversation
async function getConversationAllMessages(req, res) {
    const skip = parseInt(req.params.skip) || 0;
    const limit = 40;

    const userId = new mongoose.Types.ObjectId(req.user_id)
    // console.log(userId)

    const conversationId = req.params.conversationId;

    // console.log(conversationId)

    // Use aggregation to reverse the messageIds array and apply skip/limit
    const conversationMessages = await Conversation.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(conversationId) } }, // Match the specific conversation
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
        { $unwind: "$message" }, // Unwind to flatten the results
        {
            $addFields: {
                isSender: { $eq: ["$message.sender", userId] } // Add a boolean field to check if the user is the sender
            }
        },
        // Optionally, you can add a $project stage here to format the output
        // {
        //     $project: {
        //         _id: "$message._id",
        //         sender: "$message.sender",
        //         content: "$message.content", // Replace with your actual message content field
        //         isSender: 1 // Include the isSender field
        //     }
        // }
    ]);
    console.log(conversationMessages)
    if (conversationMessages) {
        res.send(conversationMessages);
    }
    else {
        res.send('no_conversation_yet')
    }
}

async function getConversationAllMessagesByParticipants(req, res) {
    const skip = parseInt(req.params.skip) || 0;
    const limit = 40;

    const userId = new mongoose.Types.ObjectId(req.user_id)
    const otherParticipantId = new mongoose.Types.ObjectId(req.params.otherParticipantId);

    const participants = [userId, otherParticipantId]

    // This query can be expensive so i have to use it only once if conversationId not present (when navigating to messaging screen to messagingscreen screen) and once i receive it i have to save conversation id and perform further queries by using conversation id-

    // Use aggregation to reverse the messageIds array and apply skip/limit
    const conversationMessages = await Conversation.aggregate([

        {
            $match: {
                participants: { $all: participants },
                $expr: { $eq: [{ $size: '$participants' }, participants.length] } // Ensure size matches
            }
        },
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
        { $unwind: "$message" },// Unwind to flatten the results
        {
            $addFields: {
                isSender: { $eq: ["$message.sender", userId] } // Add a boolean field to check if the user is the sender
            }
        },
    ]);
    console.log(conversationMessages)
    if (conversationMessages) {
        res.send(conversationMessages);
    }
    else {
        res.send('no_conversation_yet')
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

module.exports = { getConversationAllMessages, getConversationAllMessagesByParticipants, deleteConversation }; // Exporting the functions