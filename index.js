const express = require('express')
const app = express();
const apiRoutes = require("./config/routes")
const bodyParser = require('body-parser');
const router = require('./config/routes');
const customResponses = require('./middlewares/customResponses');
// // Import Mongoose
// const mongoose = require('mongoose');

// Configure bodyparser to handle post requsts
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(customResponses);

// Use API routes in the app
app.use(router);

// Setup server port
const port = process.env.PORT || 3000;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World from Express'));
// Launch app  to listen to specified port
app.listen(port, function () {
     console.log(`Running RestHub on port ${port}`);
});



// // Connect to Mongoose and set connection variable
// mongoose.connect('mongodb://localhost/restcountries', { useUnifiedTopology: true, useNewUrlParser: true });
// const db = mongoose.connection;
// // Added check for DB conncection
// if(!db)
//     console.log("Error connectin to db.");
// } else {
//     console.log("Db connected successfully!");