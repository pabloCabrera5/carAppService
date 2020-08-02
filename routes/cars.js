const express = require('express');
const carsController = require('../controllers/carsController');
const carsRouter = express.Router();

carsRouter.get('/', carsController.getCars)
carsRouter.post('/', carsController.addCar)
carsRouter.delete('/:carId', carsController.deleteCar)

module.exports = {
    carsRouter
};