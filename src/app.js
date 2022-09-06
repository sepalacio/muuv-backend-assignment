const express = require('express');

const errorHandler = require('./server/errorHandler');
const api = require('./api');

const app = express();
app.get('/', (_, res) => {
  res.status(200).send('Muuv Backend Server');
});
app.use('/', api);

errorHandler(app);

module.exports = app;
