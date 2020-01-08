const router= require('express').Router();
let Room = require('../models/room.model');
let Floor = require('../models/floor.model');
const mongoose = require('mongoose');

router.route('/').get((req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(400).json('Error: ' + err));
})



router.route('/add').post((req, res) => {
    const { title, capacity, floor} = req.body;

    Floor.find({ "number": floor }).then((data) => {
        const newRoom = new Room({
            _id: new mongoose.Types.ObjectId(),
            title,
            capacity,
            floor: data[0]._id,
        });
        newRoom.save()
        .then(() => res.json('Room added'))
        .catch(err => res.status(400).json('Error: ' + err))
   });
  
});
module.exports = router;