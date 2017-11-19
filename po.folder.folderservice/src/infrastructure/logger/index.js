const winston = require('winston');

winston.add(winston.transports.File, { filename: 'logs/error.log' });

module.exports = winston;
