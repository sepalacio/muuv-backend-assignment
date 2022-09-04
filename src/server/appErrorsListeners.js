const appEmitter = require('./appEmitter');

const logErrorEvent = (logData) => {
  // @todo: Send error data to an external logging tool such as stackDriver
  console.error(logData);
};

const setupLogExpressError = (errorLogger, eventName) => ({ req, error }) => errorLogger({
  params: req.params,
  body: req.body,
  method: req.method,
  headers: req.headers,
  url: req.originalUrl,
  logEvent: {
    severity: 'ERROR',
    eventName,
    eventData: {
      error,
    },
  },
});

module.exports = {
  logExpressError: setupLogExpressError(logErrorEvent, appEmitter.events.EXPRESS_ERROR),
};
