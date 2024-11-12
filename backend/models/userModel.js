const { Schema, model } = require("mongoose"); // Importing Schema and model from mongoose
const { hash } = require("bcrypt"); // Importing hash from bcrypt
const { sign } = require("jsonwebtoken"); // Importing sign from jsonwebtoken

const { JWT_secret_key } = process.env; // Destructuring JWT secret key from environment variables
const { remove_whitespaces, random_five_digit } = require("../utils/utils"); // Importing utility functions

const saltRounds = 10;

const userSchema = new Schema({
    // User basic data
    joined: { type: Date, default: Date.now },
    full_name: String,
    // first_name: String,
    // last_name: String,
    user_email: String,
    user_password: String,
    // msgs: Array,
    conversations: [{
        conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation' },
        otherParticipant: { type: Schema.Types.ObjectId, ref: 'User ' },
        createdAt: { type: Date, default: Date.now },
        lastUpdated: { type: Date },
        lastMessage: { type: String, ref: 'Message' }
    }],
    // Tokens
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true });

// Generating tokens
userSchema.methods.generateAuthToken = async function () {
    try {
        const token = sign({
            _id: this._id.toString(),
            random_id: random_five_digit() // Just to ensure more uniqueness of token
        }, JWT_secret_key);
        
        // Adding token in token of tokens field
        this.tokens = this.tokens.concat({ token: token });

        await this.save();

        return token;
    } catch (error) {
        console.log(error);
    }
};

userSchema.pre("save", async function (next) {
    // If user_password is modified during creation or updating
    if (this.isModified("user_password")) {
        let user_password = remove_whitespaces(this.user_password);
        this.user_password = await hash(user_password, saltRounds);
    }
    next();
});

const User = model("User ", userSchema);

module.exports = User; // Exporting the User model