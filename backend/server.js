const express = require("express");
const bodyParser = require("body-parser"); //create the req body object
const cors = require("cors"); //Allow CORS

const app = express();
app.use(cors());

// parse requests of content-type - application/json 
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


//Connect to the mongo db
const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the mongo database!");
    })
    .catch(err => {
        console.log("Cannot connect to the mongo database!", err);
        process.exit();
    });


//import the routes defined before in car.routes
require("./app/routes/car.routes")(app);

//middleware to intercet a wrong route
app.use(function (req, res) {
    res.status(404).send({
        wrongUrl: req.originalUrl + ' not found',
        visiteUrl: '/cars'
    })
});

//PORT 3001 - API Running
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`API running on port ${PORT}.`);
});