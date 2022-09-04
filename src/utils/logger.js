const chalk = require('chalk');

/**
 * Log an error to the console
* @param {Object}  err   - An Express error
* @param {string}  title - The error title.
*/
const handleError = (err, title = '[Error]') => {
  console.error(`${chalk.red(title)} ${err.message}`);
  if (err.response) {
    const { data } = err.response;

    console.error(data);
    return err;
  }

  console.error(err);

  return err;
};

/**
 * Log an error from express error handler
 */
const handleExpressError = (err) => {
  if (process.env.NODE_ENV !== 'test') {
    handleError(err, '[Express Error]');
  }

  return err;
};

/**
 * Log error and exit process
 */
const handleFatalError = (err) => {
  // @todo send critical alert to a monitoring tool
  handleError(err, '[Fatal Error]');
  process.exit(1);
};

module.exports = {
  handleExpressError,
  handleFatalError,
};
