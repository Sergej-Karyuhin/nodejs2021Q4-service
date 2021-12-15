import express from 'express';
import userRouter from './resources/users/user.router';
import taskRouter from './resources/tasks/task.router';

const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const boardRouter = require('./resources/boards/board.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards',boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

export default app;
