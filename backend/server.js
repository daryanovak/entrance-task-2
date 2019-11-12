const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());// middleware
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB datebase connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const meetsRouter = require('./routes/meets');
const roomsRouter = require('./routes/rooms');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/meets', meetsRouter);
app.use('/rooms', roomsRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});