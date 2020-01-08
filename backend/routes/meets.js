const router = require('express').Router();
let Meet = require('../models/meet.model');
let User = require('../models/user.model');
const mongoose = require('mongoose');

router.route('/').get((req, res) => {
    Meet.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/add').post((req, res) => {
    const { topic, room, startDate, endDate, members } = req.body;

    const newMeet = new Meet({
        _id: new mongoose.Types.ObjectId(),
        room,
        topic,
        startDate,
        endDate,
        members,
    });

    members.forEach(userId => {
        // User.findOneAndUpdate({ "_id": userId}, {$set: {  "meetings": '555555555' }}, {new: true}, (err, doc) => {
        //     if (err) {
        //         console.log("Something wrong when updating data!");
        //     }
        //     console.log(doc);
        // });
        User.findOne({ _id: userId })
            .then(user => {
                console.log(user);
                console.log(user.meetings);
                user.meetings = [newMeet._id];//TODO add instead overwrite
                user.markModified('meetings');
                user.save(err => console.log(err));
            });
    });


    newMeet.save()
        .then(() => res.json('Meet added'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;