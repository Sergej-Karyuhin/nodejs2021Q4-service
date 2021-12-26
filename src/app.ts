import express, { ErrorRequestHandler } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import taskRouter from './resources/tasks/task.router';
import boardRouter from './resources/boards/board.router';
import { logger, expressLogger } from './logger';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(expressLogger);

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

// eslint-disable-next-line
app.use(((err, req, res, next) => {
  const errMessage = 'Internal Server Error';
  logger.info(err, errMessage);
  res.status(err.status || 500).send(errMessage);
}) as ErrorRequestHandler);

process
  .on('unhandledRejection', (reason, p) => {
    logger.info(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    logger.info(err, 'Uncaught Exception thrown');
    process.exit(1);
  });

app.use('/users', userRouter);
app.use('/boards',boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

export default app;
