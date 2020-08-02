const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.MONGO}://${process.env.MONGO_URL}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(data => {
        console.log('Connected to mongo')
    })
    .catch(err => {
        console.log('Fail connecting to mongo', err);
    })
