const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: './logs/error.log', level: 'warn' }),
    new winston.transports.Console({ level: 'error' }),
    new winston.transports.File({ filename: './logs/combined.log' }),
  ],
});

module.exports = logger;
