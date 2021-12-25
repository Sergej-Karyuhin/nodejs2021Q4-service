import pino from 'pino';

const expressPino = require('express-pino-logger');

const logger = pino({ level: process.env.LOG_LEVEL || 'info', prettyPrint: true });
const expressLogger = expressPino({ logger });

export { logger, expressLogger };