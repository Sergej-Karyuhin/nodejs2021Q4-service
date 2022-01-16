import { writeFileSync } from 'fs';
import { LOG_PATH } from './common/constants';

interface IReason {
  message: string;
}

process.on('unhandledRejection', (reason: IReason) => {
  writeFileSync(`${LOG_PATH}error.log`, `\nUnhandledRejection: ${reason.message}`, {
    flag: 'a',
  });
  console.error(`UnhandledRejection: ${reason.message}`);
});

process.on('uncaughtException', (error: Error) => {
  writeFileSync(`${LOG_PATH}error.log`, `\nUncaughtException: ${error.message}`, {
    flag: 'a',
  });
  console.error(`UncaughtException: ${error.message}`);
  process.exit(1);
});
