const User = require('../models/userModel'); // Importing the User model
const mongoose = require('mongoose');
const { push_elements_of_arr_of_obj_in_another_arr_of_obj_in_respective_order } = require('../utils/utils');

// Get user conversations
async function getUserConversations(req, res) {
    const skip = parseInt(req.params.skip) || 0;
    const limit = 15;

    console.log(req.user_id)

    const userChatConversations = await User.aggregate([
        {
            $match: { _id: new mongoose.Types.ObjectId(req.user_id) } // Match the user by userId
        },
        {
            $unwind: '$conversations' // Unwind the conversations array to work with individual conversation objects
        },
        {
            $sort: { 'conversations.lastUpdated': -1 } // Sort by lastUpdated in descending order
        },
        {
            $skip: skip // Skip the number of conversations
        },
        {
            $limit: limit // Limit the number of conversations
        },
        {
            $lookup: {
                from: 'conversations', // The collection name for conversations
                localField: 'conversations.conversationId', // Match by conversationId inside the conversations array
                foreignField: '_id', // Match by conversation ID
                as: 'userConversations' // Name of the output array
            }
        },
        // {
        //     $project: {
        //         conversations: 1, // Keep the conversations field
        //         userConversations: 1 // Keep the userConversations field
        //     }
        // },
        {
            $unwind: '$userConversations' // Unwind the userConversations array
        },
        {
            $sort: { 'userConversations.messageIds': -1 } // Sort by lastUpdated in descending order
        },

        {
            $skip: skip // Skip the number of conversations
        },
        {
            $limit: limit // Limit the number of conversations
        },
        {
            $project: {
                conversations: 1, // Keep the conversations field
                userConversations: 1 // Keep the userConversations field
            }
        },
        // {
        //     $lookup: {
        //         from: 'users', // Assuming the User model is in the 'users' collection
        //         localField: 'userConversations.otherParticipant', // Assuming this field holds the ID of the other participant
        //         foreignField: '_id',
        //         as: 'otherParticipant'
        //     }
        // },
        // {
        //     $unwind: '$otherParticipant' // Unwind the otherParticipant array
        // },
        // {
        //     $project: { // Select the fields to return
        //         conversationId: '$userConversations._id',
        //         lastUpdated: '$userConversations.updatedAt',
        //         otherParticipant: {
        //             full_name: '$otherParticipant.full_name',
        //             profile_image_filename: '$otherParticipant.profile_image_filename'
        //         }
        //     }
        // }
    ]);
    // console.log(userChatConversations)
    // console.log(userChatConversations[0].userConversations)

    // const otherUser = await User.findOne({_id: userChatConversations[0].conversations.otherParticipant}, {full_name: 1, profile_image_filename: 1})
    // console.log(otherUser);

    let otherUserDataArray = [];

    for (let i = 0; i < userChatConversations.length; i++) {
        const otherUserId = userChatConversations[i].conversations.otherParticipant;
        const otherUserData = await User.findOne({ _id: otherUserId }, { full_name: 1, profile_image_filename: 1 }).lean()
        // console.log(otherUserData);
        otherUserDataArray.push(otherUserData);

        // userChatConversations[i].push({otherUserData: otherUserData});
    }

    let data = push_elements_of_arr_of_obj_in_another_arr_of_obj_in_respective_order(userChatConversations, otherUserDataArray)


    console.log(data)

    // let data = {
    //     conversationId: userChatConversations[0].conversations._id,
    //     otherParticipantId: userChatConversations[0].conversations.otherParticipant,
    //     lastUpdated: userChatConversations[0].conversations.lastUpdated,
    //     lastMessage: userChatConversations[0].conversations.lastMessage,
    //     conversationFieldElementId: userChatConversations[0].conversations._id,
    //     otherParticipantName: otherUser.full_name,
    //     otherParticipantProfileImage: otherUser.profile_image_filename
    // }

    if (data) {
        res.send(data);
    }
}

// Search user by name
async function searchUserByName(req, res) {
    // let skip = parseInt(req.params.skip);
    console.log(req.params);
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
        // { $skip: skip },
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

// async function getConversationIdWithOtherParticipant(req, res) {
//     const user_id = req.user_id;
//     const otherParticipantId = req.params.otherParticipantId;

//     try {
//         const matchingConversations = await User.aggregate([
//             {
//                 $match: {
//                     _id: mongoose.Types.ObjectId(user_id) // Match the user by ID
//                 }
//             },
//             {
//                 $project: {
//                     matchingConversations: {
//                         $filter: {
//                             input: "$conversations", // The array to filter
//                             as: "conversation", // Variable name for each element in the array
//                             cond: {
//                                 $eq: ["$$conversation.otherParticipant", mongoose.Types.ObjectId(otherParticipantId)] // Condition to match
//                             }
//                         }
//                     }
//                 }
//             }
//         ]);

//         console.log(matchingConversations);
//         res.send(matchingConversations)


//     } catch (error) {
//         console.error('Error finding matching conversations:', error);
//         res.send('error_occured')
//     }
// }   

module.exports = { getUserConversations, searchUserByName }; // Exporting the functions

// i want to find a array