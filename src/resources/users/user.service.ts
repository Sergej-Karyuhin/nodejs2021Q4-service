import * as usersRepo from './user.memory.repository';
import { UserDB } from '../../entities/User';

const getAll = (): Promise<UserDB[]> => usersRepo.getAll();

const getUser = (id: string): Promise<UserDB | null> => usersRepo.getById(id);

const save = (name: string, login: string, password: string): Promise<UserDB> =>
  usersRepo.save(name, login, password);

const update = (
  id: string,
  name: string,
  login: string,
  password: string
): Promise<UserDB | null> => usersRepo.update(id, name, login, password);

const deleteUser = (id: string): Promise<boolean> => usersRepo.deleteUser(id);

const getUserByLogin = (login: string): Promise<UserDB | null> => usersRepo.getUserByLogin(login);

export { getAll, getUser, save, update, deleteUser, getUserByLogin };
