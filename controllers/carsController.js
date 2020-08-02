const { carModel } = require('../models/carModel');
const { ErrorHandler } = require('../helpers/error');

exports.getCars = async (req, res, next) => {
    try {
        // get list of cars from the db
        let cars = await carModel.find();
        if (!cars) {
            return res.status(200).json({ Status: 200, Message: 'There is no cars in the DB, go add some.' })
        }
        // return the list of cars
        return res.status(200).json({ Status: 200, Message: 'Here the list of cars', Payload: cars })
    } catch (err) {
        next(err);
    }
}

exports.addCar = async (req, res, next) => {
    try {
        // get the car info & made validations
        let { body } = req;
        if (!body) {
            throw new ErrorHandler(400, 'The body is required');
        }
        if (!body.name || !body.make || !body.model || !body.year) {
            throw new ErrorHandler(400, 'Missing param in body');
        }
        if (!body.id) {
            body.id = new Date().getTime()
        }
        // create the db document and save the car
        // await carModel.create(body);
        let newCar = new carModel(body);
        await newCar.save()
        // return ok or fail 
        return res.status(200).json({ Status: 200, Message: 'Car created succesfully' })
    } catch (err) {
        next(err);
    }
}

exports.deleteCar = async (req, res, next) => {
    try {
        // get id car
        let { carId } = req.params
        // must have an id
        if (!carId) {
            throw new ErrorHandler(400, 'The param id is required');
        }
        carId = parseInt(carId);
        // must be a number
        if (isNaN(carId)) {
            throw new ErrorHandler(400, 'The id must be a number')
        }
        // delete from the db
        let deleteCar = await carModel.findOneAndDelete({ id: carId });
        if (!deleteCar) {
            return res.status(200).json({ Status: 200, Message: `Sorry, there was no car with the id provided: ${carId}` })
        }
        // return ok or fail 
        res.status(200).json({ Status: 200, Message: 'Car delete succesfully' })
    } catch (err) {
        next(err);
    }
}
