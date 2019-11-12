const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const floorSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    number: Number,
    rooms:  [
        {type: mongoose.Schema.Types.ObjectId, ref:'Room'}
    ]
});

const Floor = mongoose.model('Floor', floorSchema);

module.exports = Floor;