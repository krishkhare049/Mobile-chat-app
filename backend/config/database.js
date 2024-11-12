const mongoose = require('mongoose');
const { MONGO_URI } = process.env;

function connect() {
    mongoose.connect(MONGO_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to database")
    }).catch((error) => {
        console.log(error)
        console.log("Database connection failed. exiting now...");
    })
}

module.exports = {connect}