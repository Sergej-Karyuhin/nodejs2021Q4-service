import pino from 'pino';

const expressPino = require('express-pino-logger');

const logger = pino(
  { level: process.env.LOG_LEVEL || 'info', prettyPrint: true }, 
  pino.destination(`${__dirname}/logger.log`),
);
const expressLogger = expressPino({ logger });

export { logger, expressLogger };