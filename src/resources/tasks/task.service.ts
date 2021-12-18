import { getAllTasks, createTask, readTask, updateTask, deleteTask } from './task.memory.repository';
import { ITask } from './task.model';

const getAll = (boardId: string) => getAllTasks(boardId);
const create = (task: ITask) => createTask(task);
const read = (id: string) => readTask(id);
const update = (boardId: string, id: string, task: ITask) => updateTask(boardId, id, task);
const remove = (id: string) => deleteTask(id);

export { getAll, create, read, update, remove };
