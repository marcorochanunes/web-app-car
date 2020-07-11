const db = require("../models");
const Car = db.cars;

/**
 * Post request to create a car
 * @param {*} req the content of car
 * @param {*} res response of request
 */
exports.createCar = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Car cannot be empty' });
        return;
    }
    const car = new Car(req.body);
    car.save(car)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred during the car creation."
            });
        });
};


/**
 * Function to get all cars
 * @param {*} req request
 * @param {*} res response
 */
exports.getAllCars = (req, res) => {
    Car.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Error occurred during fetching all cars'
            })
        })
};

/**
 * Function to get a single car by ID
 * @param {*} req request
 * @param {*} res response
 */
exports.getCarByID = (req, res) => {
    const id = req.params.carID; //carID is defining in route
    Car.findById(id)
        .then(data => {
            return !data ? res.status(404).send({ message: 'Car not found' }) : res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}


/**
 * Function to delete a single car by ID
 * @param {*} req request
 * @param {*} res response
 */
exports.deleteCarByID = (req, res) => {
    const id = req.params.carID; //carID is defining in route
    Car.findByIdAndRemove(id)
        .then(data => {
            return !data ? res.status(404).send({ message: 'Car not found' }) : res.send({ message: "Car removed" })
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}


/**
 * Function to update a single car by ID
 * @param {*} req request
 * @param {*} res response
 */
exports.updateCarByID = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Car info cannot be empty" });
    }

    const id = req.params.carID; //carID is defining in route
    Car.findByIdAndUpdate(id, req.body)
        .then(data => {
            return !data ? res.status(404).send({ message: 'Car not found' }) : res.send({ message: "Car updated" })
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}