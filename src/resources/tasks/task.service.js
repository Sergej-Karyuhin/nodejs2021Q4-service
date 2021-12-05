const tasksRepo = require('./task.memory.repository');

const getAllTasks = (boardId) => tasksRepo.getAllTasks(boardId);
const create = (task) => tasksRepo.createTask(task);
const read = (id) => tasksRepo.readTask(id);
const update = (boardId, id, task) => tasksRepo.updateTask(boardId, id, task);
const remove = (id) => tasksRepo.deleteTask(id);

module.exports = { getAllTasks, create, read, update, remove };
