const express = require('express');
const { API_VERSION } = require('./constants');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Import routes
const authRoutes = require('./router/auth.js');
//Configure Body Parser
app.unsubscribe(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Configure static folder
app.use(express.static("uploads"));


//Configure Header HTTP - CORS
app.use(cors());

//Configure routings
app.use(`api/${API_VERSION}`,authRoutes)
module.exports = app;