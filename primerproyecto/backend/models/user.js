const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    games: {
        type: Number
    },
    clues: {
        type: Number
    },
    solutions: {
        type: Number
    }
});

module.exports = mongoose.model('User', User);
