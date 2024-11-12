const { Schema, model } = require('mongoose'); // Importing Schema and model from mongoose

const conversationSchema = new Schema({
    participants: [{ type: Schema.Types.ObjectId, ref: 'User ' }],
    messageIds: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    // createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Conversation = model('Conversation', conversationSchema); // Creating the Conversation model

module.exports = Conversation; // Exporting the Conversation model