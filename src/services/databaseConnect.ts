import { createConnection } from 'typeorm';
import { config } from '../common/ormconfig';

const databaseConnect = async () => {
  try {
    await createConnection(config);
    console.log('The database is connected!');
  } catch (err) {
    console.error('Database connection error!', err);
  }
};

export default databaseConnect;
