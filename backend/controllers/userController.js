const User = require('../models/userModel'); // Importing the User model
const mongoose = require('mongoose')

// Get user conversations
async function getUserConversations(req, res) {
    const skip = req.params.skip;
    const limit = 15;

    const userConversations = await User.aggregate([
        { 
            $match: { _id: req.userId } // Match the user by userId
        },
        {
            $lookup: {
                from: 'conversations', // The collection name for conversations
                localField: 'conversations', // User's conversations field
                foreignField: '_id', // Match by conversation ID
                as: 'userConversations' // Name of the output array
            }
        },
        {
            $unwind: '$userConversations' // Unwind the userConversations array
        },
        {
            $sort: { 'userConversations.lastUpdated': -1 } // Sort by lastUpdated in descending order
        },
        {
            $limit: limit // Limit the number of conversations
        },
        {
            $lookup: {
                from: 'users', // Assuming the User model is in the 'users' collection
                localField: 'userConversations.otherParticipant',
                foreignField: '_id',
                as: 'otherParticipant'
            }
        },
        {
            $unwind: '$otherParticipant' // Unwind the otherParticipant array
        },
        {
            $project: { // Select the fields to return
                conversationId: '$userConversations._id',
                lastUpdated: '$userConversations.lastUpdated',
                otherParticipant: {
                    name: '$otherParticipant.name',
                    imageUrl: '$otherParticipant.imageUrl'
                }
            }
        }
    ]);

    if (userConversations) {
        res.send(userConversations);
    }
}

// Search user by name
async function searchUserByName(req, res) {
    let skip = parseInt(req.params.skip);
    console.log(req.params)
    let limit = 10;

    let searchQ = req.params.text.trim();
    const user_id = req.user_id;

    let matching_users = await User.aggregate([
        {
            $match: {
                full_name: { $regex: new RegExp("^" + searchQ + ".*", "i") },
                _id: { $ne: new mongoose.Types.ObjectId(user_id) },
            },
        },
        { $skip: skip },
        { $limit: limit },
        {
            $project: {
                _id: 1,
                full_name: 1,
                user_email: 1,
                profile_image_filename: 1,
                // friendslen: { $size: "$active_friends" },
                // isFriend: {
                //     $in: [user_id, "$active_friends"],
                // },
            },
        },
    ]);

    if (matching_users) {
        console.log(matching_users)
        res.send(matching_users);
    }
}

module.exports = { getUserConversations, searchUserByName }; // Exporting the functions