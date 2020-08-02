const mongoose = require('mongoose');
const Schema = mongoose.Schema

const carSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    vin: String,
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    fuelType: {
        type: String,
        default: 'Petrol'
    },
    type: {
        type: String,
        default: 'SUV'
    },
    position: {
        lat: {
            type: Number,
            default: 3.995
        },
        lon: {
            type: Number,
            default: 43.2221
        }
    },
    odometer: {
        type: Number,
        default: 43546
    },
    fuel: {
        type: Number,
        default: 33
    },
    battery: {
        type: Number,
        default: 12.7
    }
}, {
    timestamps: true,
})

const carModel = mongoose.model('car', carSchema);
exports.carModel = carModel