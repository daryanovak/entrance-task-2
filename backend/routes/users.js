const router= require('express').Router();
let User = require('../models/user.model');
const mongoose = require('mongoose');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res)=> {
    const { userName, email} = req.body;
    console.log(userName, email);
    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        userName,
        email
    });


    newUser.save()
    .then(()=> res.json('user added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;