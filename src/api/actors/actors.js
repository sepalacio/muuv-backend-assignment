const express = require('express');

const getActorsWithMultipleCharacters = require('./handlers/multipleCharacters');

const actors = express.Router();

actors
  .get('/actors/multipleCharacters', getActorsWithMultipleCharacters);

module.exports = actors;
