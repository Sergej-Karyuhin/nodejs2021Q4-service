import { getRepository } from 'typeorm';
import { UserDB } from '../../entities/User';
import * as tasksService from '../tasks/task.service';

const getAll = async (): Promise<UserDB[]> => {
  const userRepository = await getRepository(UserDB);
  const allUsers = await userRepository.find({ where: {} });

  return allUsers;
};

const getById = async (id: string): Promise<UserDB | null> => {
  const userRepository = await getRepository(UserDB);
  const findUser = await userRepository.findOne(id);

  return findUser ?? null;
};

const save = async (name: string, login: string, password: string): Promise<UserDB> => {
  const userRepository = await getRepository(UserDB);
  const newUser = await userRepository.create({ name, login, password });
  const savedUser = await userRepository.save(newUser);

  return savedUser;
};

const update = async (
  id: string,
  name: string,
  login: string,
  password: string
): Promise<UserDB | null> => {
  const userRepository = await getRepository(UserDB);
  const findUser = await userRepository.findOne(id);
  if (findUser === undefined) return null;
  const updatedUser = await userRepository.update(id, { name, login, password });

  return updatedUser.raw;
};

const deleteUser = async (id: string): Promise<boolean> => {
  const userRepository = await getRepository(UserDB);
  await tasksService.resetID(id);
  const deletedUser = await userRepository.delete(id);
  
  if (deletedUser.affected) {
    return true;
  }

  return false;
};

const getUserByLogin = async (login: string): Promise<UserDB | null> => {
  const userRepository = await getRepository(UserDB);
  const user = await userRepository.findOne({ login });

  return user ?? null;
}

export { getAll, getById, save, update, deleteUser, getUserByLogin };
