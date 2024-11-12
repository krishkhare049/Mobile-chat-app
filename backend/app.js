// Configuring environment variables
// require('dotenv').config()
require('dotenv').config(); // Importing dotenv

// Connect with database
require('./config/database').connect()
const express = require('express'); // Importing express
const { json } = require('express'); // Importing json middleware from express
const cors = require('cors'); // Importing cors
const compression = require('compression'); // Importing compression
const methodOverride = require('method-override'); // Importing method-override
const cookieParser = require('cookie-parser'); // Importing cookie-parser

const {extract_token_user_id} = require('./middlewares/extract_token_user_id'); // Importing middleware

const authRoutes = require('./routes/authRoutes'); // Importing auth routes
const userRoutes = require('./routes/userRoutes'); // Importing user routes
const messageRoutes = require('./routes/messageRoutes'); // Importing message routes
const conversationRoutes = require('./routes/conversationRoutes'); // Importing conversation routes
const {restrict_to_logged_in} = require('./middlewares/restrict_to_logged_in'); // Importing restrict middleware

const app = express(); // Creating an instance of express

// Handle post requests
app.use(json());

// Cookies parser
app.use(cookieParser());

// Handle put requests
app.use(methodOverride("_method"));

// Compress all responses
app.use(compression({
    level: 9,
    threshold: 0,
    filter: (req, res) => {
        if (req.headers["x-no-compression"]) {
            return false;
        }
        return compression.filter(req, res); // Use compression.filter instead of _filter
    }
}));

// CORS
const whitelist = [
    "http://localhost:5000",
    "https://mernTodo.com",
    "http://127.0.0.1:5500",
    "http://127.0.0.1",
    "http://192.168.137.1:5000",
    "http://192.168.179.88:5000"
];

let corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Include before other routes

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Extract token and user_id
app.use(extract_token_user_id);

// Use authentication routes
app.use('/api/auth', authRoutes);

// Use users routes (Protected)
app.use('/api/users', restrict_to_logged_in, userRoutes);

// Use messages routes (Protected)
app.use('/api/messages', restrict_to_logged_in, messageRoutes);

// Use conversations routes (Protected)
app.use('/api/conversations', restrict_to_logged_in, conversationRoutes);

// Export app to server.js
module.exports = app; // Exporting the app