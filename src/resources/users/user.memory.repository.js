import User from './user.model';

const { users, tasks } = require('../../../mock/data');

const getAllUsers = async () => users;

const createUser = async (user) => {
  const newUser = new User(user);
  users.push(newUser);
  return newUser;
};

const readUser = async (id) => users.find(user => (user.id === id));

const updateUser = async (id, updatedUser) => {
  const foundUser = users.find(user => (user.id === id));
  if (foundUser) {
    foundUser.name = updatedUser.name;
    foundUser.login = updatedUser.login;
    foundUser.password = updatedUser.password;
    return foundUser;
  }
  return users;
};

const deleteUser = async (id) => {
  const index = users.findIndex(user => user.id === id);
  users.splice(index, 1);
  tasks.forEach(task => {
    if (task.userId === id) {
      const updatedTask = task;
      updatedTask.userId = null;
    }
  })
  return {};
};

export { getAllUsers, createUser, readUser, updateUser, deleteUser };
