module.exports = app => {
    const cars = require("../controllers/car.controller.js");

    //Welcome Route
    app.get("/", (req, res) => {
        res.json({ message: "Welcome to API Node Backend application." });
    });

    // cars routes
    app.route('/cars')
        .post(cars.createCar) //POST a single car
        .get(cars.getAllCars); //GET all cars

    //cars/:cardID routes
    app.route('/cars/:carID')
        .get(cars.getCarByID)  //GET a single car 
        .delete(cars.deleteCarByID) //DELETE a single car
        .put(cars.updateCarByID) //PUT update a single car
};