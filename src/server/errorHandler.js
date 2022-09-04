const { handleExpressError } = require('../utils/logger');

const appEmitter = require('./appEmitter');

const { EXPRESS_ERROR } = appEmitter.events;

/**
 * setup Express error handler
 * @param {Object} app Express application Object
 */
const expressErrorHandler = (app) => {
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    appEmitter.emit(EXPRESS_ERROR, { req, error: err });

    const error = handleExpressError(err);
    const status = error.status || 500;

    res.status(status).send(error);
  });
};

module.exports = expressErrorHandler;
