const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    floor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Floor'
    },
    title: String,
    capacity: Number, 
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;