import { getAllTasks, createTask, readTask, updateTask, deleteTask } from './task.memory.repository';

const getAll = (boardId) => getAllTasks(boardId);
const create = (task) => createTask(task);
const read = (id) => readTask(id);
const update = (boardId, id, task) => updateTask(boardId, id, task);
const remove = (id) => deleteTask(id);

export { getAll, create, read, update, remove };
