const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName: String,
    email: String, 
    meetings: [ { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Meet'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;