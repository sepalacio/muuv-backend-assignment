const { handleFatalError } = require('../utils/logger');

const appEmitter = require('./appEmitter');
const { logExpressError } = require('./appErrorsListeners');

/**
 * Listen for unrecoverable errors in the app and attach handlers
 * for additional logging of them
 */
const addAppListeners = () => {
  process.on('uncaughtException', handleFatalError);
  process.on('unhandledRejection', handleFatalError);
  appEmitter.on(appEmitter.events.EXPRESS_ERROR, logExpressError);

  return appEmitter;
};

module.exports = addAppListeners;
