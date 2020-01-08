const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const floorSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    number:  { type : Number , unique : true, required : true },
});

const Floor = mongoose.model('Floor', floorSchema);

module.exports = Floor;