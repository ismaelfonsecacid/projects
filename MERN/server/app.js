const express = require('express');
const { API_VERSION } = require('./constants');
const bodyParser = require('body-parser');

const app = express();

//Import routes

//Configure Body Parser
app.unsubscribe(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Configure Header HTTP - CORS

//Configure routings

module.exports = app;