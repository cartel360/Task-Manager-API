// Requiring the packages we will need in the app.
require('dotenv').config();

const express = require('express');
const taskRouter = require("./routes/routes");
const mongooserequiring = require('./db/mongoose');

// Defining app to be an express app and the port to use, we define PORT number in our config file for security and reliability 
const app = express();
const port = 3000

// Using in app
app.use(express.json());
app.use('/v1', taskRouter);


// Just logging the app start
app.listen(port, () => { console.log("Server is up at " + port); });