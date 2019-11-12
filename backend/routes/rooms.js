const router= require('express').Router();
let Room = require('../models/room.model');
const mongoose = require('mongoose');

router.route('/').get((req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const { title, capacity} = req.body;

    const newRoom = new Room({
        _id: new mongoose.Types.ObjectId(),
        title,
        capacity,
    });

    newRoom.save()
        .then(() => res.json('Room added'))
        .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;