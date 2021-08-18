const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
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
    wins:{
        type:Number
    },
    clues: {
        type: Number
    },
    solutions: {
        type: Number
    }
});

module.exports = mongoose.model('user', UserSchema);
