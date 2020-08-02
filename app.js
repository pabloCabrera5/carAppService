const express = require('express');
const cors = require('cors');
const { carsRouter } = require('./routes/cars');
const { errorHandler } = require('./middlewares/errorHandler');
require('./config/db');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the services, you can get, create and delete cars. Under the route /cars</h1>');
})
app.use('/cars', carsRouter);
app.get('*', (req, res) => {
    res.redirect('/');
});

// error handler middleware
app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
})

app.listen(process.env.PORT || 3001, () =>
    console.log(`Listening on port ${process.env.PORT || 3001}`)
)