const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    room: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Room'
    },
    topic: String,
    startDate: Date,
    endDate: Date, 
    members: [ mongoose.Schema.Types.ObjectId ]
});

const Meet = mongoose.model('Meet', meetSchema);

module.exports = Meet;


