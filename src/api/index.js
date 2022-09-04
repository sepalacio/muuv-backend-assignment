const express = require('express');

const actors = require('./actors');

const routes = express.Router();

routes.use(actors);

module.exports = routes;
