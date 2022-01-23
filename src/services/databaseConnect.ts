import { createConnection } from 'typeorm';
import { config } from '../common/ormconfig';
import * as userService from '../resources/users/user.service';

const createUser = async () => {
  const name = 'admin';
  const login = 'admin';
  const password = 'admin';

  const createdUser = await userService.getUserByLogin(login);

  if (!createdUser) {
    await userService.save(name, login, password);
  }
}

const databaseConnect = async () => {
  try {
    const connection = await createConnection(config);

    if (connection.isConnected) {
      console.log('The database is connected!');
      await createUser();
      console.log('The user was created!');
    }

  } catch (err) {
    console.error('Database connection error!', err);
  }
};

export default databaseConnect;
