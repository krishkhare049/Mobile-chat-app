const { Schema, model } = require('mongoose'); // Importing Schema and model from mongoose

const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User ' },
    receiver: { type: Schema.Types.ObjectId, ref: 'User ' },
    message: { type: String, required: true },
    // timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

const Message = model('Message', messageSchema); // Creating the Message model

module.exports = Message; // Exporting the Message model