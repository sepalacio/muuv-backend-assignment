const chalk = require('chalk');
const cluster = require('cluster');
const totalCPUs = require('os').cpus().length;

const { name, version } = require('../../package.json');
const { port } = require('../config/server');
const app = require('../app');
const addAppListeners = require('./addAppListeners');
const { handleFatalError } = require('../utils/logger');

const { NODE_ENV } = process.env;

const initServer = () => {
  try {
    if (cluster.isMaster) {
      console.log(`Number of CPUs is ${totalCPUs}`);
      console.log(`Master ${process.pid} is running`);

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork();
      });
    } else {
      console.log(`Worker ${process.pid} started`);

      addAppListeners();
      app.listen(port, () => {
        console.info(chalk.green(`
          ${name} ${version}
          Server running on http://localhost:${port}/
          Running with NodeJS ${process.version}
          Environment: ${NODE_ENV}`));
      });
    }
  } catch (error) {
    handleFatalError();
  }
};

initServer();
