const chalk = require('chalk');

const { NODE_ENV, MUUV_PORT } = process.env;

const config = {
  port: MUUV_PORT || 7000,
};

const printServerConfig = () => (
  NODE_ENV !== 'test' && console.info(chalk.cyan('Server:'), JSON.stringify(config, null, ' '))
);

printServerConfig();

module.exports = config;
