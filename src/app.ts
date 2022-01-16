import express, { NextFunction, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import * as fs from 'fs';
import { writeFileSync } from 'fs';
import { finished } from 'stream';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import './errorHandler';
import { LOG_PATH } from './common/constants';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

if (!fs.existsSync(LOG_PATH)) {
  fs.mkdirSync(LOG_PATH);
}

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  const { method, url, body } = req;
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }

  finished(res, () => {
    const { statusCode } = res; // prettier-ignore
    writeFileSync(`${LOG_PATH}out.log`, `\n method: ${method} url: ${url} params: ${JSON.stringify(req.params)} query: ${JSON.stringify(req.query)} body: ${JSON.stringify(body)} statusCode: ${statusCode}`, { flag: 'a' }); // prettier-ignore
    console.log(`method: ${method} url: ${url} params: ${JSON.stringify(req.params)} query: ${JSON.stringify(req.query)} body: ${JSON.stringify(body)} statusCode: ${statusCode}`); // prettier-ignore
  });
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards', taskRouter);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  writeFileSync(`${LOG_PATH}error.log`, `\nError: ${err.message}`, { flag: 'a' });
  console.error(`Error: ${err.message}`);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR));
  next();
});

export default app;
