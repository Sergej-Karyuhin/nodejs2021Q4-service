import User, { IUserWithPass, IUserWithId } from './user.model';
import { ITask } from '../tasks/task.model';

const { users, tasks } = require('../../../mock/data');

const getAllUsers = async () => users;

const createUser = async (user: IUserWithPass) => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

const readUser = async (id: string) => users.find((user: IUserWithId) => (user.id === id));

const updateUser = async (id: string, updatedUser: IUserWithPass) => {
  const foundUser = users.find((user: IUserWithId) => (user.id === id));
  if (foundUser) {
    foundUser.name = updatedUser.name;
    foundUser.login = updatedUser.login;
    foundUser.password = updatedUser.password;
    return foundUser;
  }
  return users;
};

const deleteUser = async (id: string) => {
  const index = users.findIndex((user: IUserWithId) => user.id === id);
  users.splice(index, 1);
  tasks.forEach((task: ITask) => {
    if (task.userId === id) {
      const updatedTask = task;
      updatedTask.userId = null;
    }
  })
  return {};
};

export { getAllUsers, createUser, readUser, updateUser, deleteUser };
