const express = require('express');

const getActorsWithMultipleCharacters = require('./handlers/multipleCharacters');

const actors = express.Router();

actors
  .get('/actorsWithMultipleCharacters', getActorsWithMultipleCharacters);

module.exports = actors;
