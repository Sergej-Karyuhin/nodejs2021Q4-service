const User = require('./user.model');

const users = [];
const userNames = ['Foo', 'Bar', 'Baz', 'Boris', 'Britva'];
userNames.forEach((user, index) => users.push(new User(
  { name: user, login: `User ${index + 1}` }
)));

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
  const index = users.findIndex((user) => (user.id === id));
  if (index < 0) return false;
  users.splice(index, 1);
  return true;
};

module.exports = { getAllUsers, createUser, readUser, updateUser, deleteUser };
