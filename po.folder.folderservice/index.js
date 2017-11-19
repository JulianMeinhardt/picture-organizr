const logger = require('./src/infrastructure/logger');
const express = require('express');

// -----------------------------------------------------------------------------
// Start the database
// -----------------------------------------------------------------------------
logger.info('Database Started');

// -----------------------------------------------------------------------------
// Start the HTTP Server and expose the RESTful API
// -----------------------------------------------------------------------------
const port = process.env.PORT || 3000;

const api = require('./src/adapter/rest');

const server = express(); // should need api config


// Start listening to HTTP requests
server.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});

// -----------------------------------------------------------------------------
// Stop the HTTP server and the database when SIGINT is received
// (i.e. Ctrl-C is pressed)
// -----------------------------------------------------------------------------
process.on('SIGINT', () => {
  logger.info('SIGINT received ...');
  server.shutdown(() => {
    logger.info('Server stopped ...');
    /* persistence.destroyConnectionPool(() => {
      logger.info('Database stopped ...');
      logger.info('Exiting process ...');
      process.exit();
    }); */
  });
});
