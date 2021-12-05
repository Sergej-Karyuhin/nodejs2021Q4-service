const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAllUsers();
const create = (user) => usersRepo.createUser(user);
const read = (id) => usersRepo.readUser(id);
const update = (id, user) => usersRepo.updateUser(id, user);
const remove = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, create, read, update, remove };
