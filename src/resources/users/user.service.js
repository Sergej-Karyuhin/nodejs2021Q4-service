const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAllUsers();
const create = (user) => usersRepo.createUser(user);
const read = (id) => usersRepo.readUser(id);
const update = (id, user) => usersRepo.updateUser(id, user);

const remove = async (id) => {
  const tasks = await tasksService.getAll();
  const newTasks = tasks
    .filter((task) => (task.userId === id))
    .map(el => tasksService.update(null, el.id, { userId: null }));
  return Promise.all([newTasks, usersRepo.deleteUser(id)]);
};

module.exports = { getAll, create, read, update, remove };
