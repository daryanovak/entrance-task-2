const router= require('express').Router();
let Floor = require('../models/floor.model');
const mongoose = require('mongoose');

// router.route('/').get((req, res) => {
//     Room.find()
//         .then(rooms => res.json(rooms))
//         .catch(err => res.status(400).json('Error: ' + err));
// })

router.route('/add').post((req, res) => {
    const number = req.body.number;

    const newFloor = new Floor({
        _id: new mongoose.Types.ObjectId(),
        number,
    });

    newFloor.save()
        .then(() => res.json('Floor added'))
        .catch(err => res.status(400).json('Error: ' + err))
});
module.exports = router;