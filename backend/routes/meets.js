const router= require('express').Router();
let Meet = require('../models/meet.model');

// router.route('/').get((req, res) => {
//     User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// })


router.route('/add').post((req, res) => {
    const topic = req.body.topic;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    const newMeet = new Meet({
        // room: { 
        //     type: mongoose.Schema.Types.ObjectId, 
        //     ref: 'Room'
        // },
        topic,
        startDate,
        endDate, 
        // members: [ { 
        //     type: mongoose.Schema.Types.ObjectId, 
        //     ref: 'Room'
        // }]
    });

    newMeet.save()
        .then(() => res.json('Meet added'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;