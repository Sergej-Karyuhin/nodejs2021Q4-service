import Task, { ITask } from './task.model';

const { tasks } = require('../../../mock/data');

const getAllTasks = async (boardId: string) => tasks.filter((task: ITask) => (task.boardId === boardId));

const createTask = async (task: ITask) => {
  const newTask = new Task(task);
  tasks.push(newTask);
  return newTask;
};

const readTask = async (id: string) => tasks.find((task: ITask) => (task.id === id));

const updateTask = async (boardId: string, taskId: string, task: ITask) => {
  const index = tasks.findIndex((item: ITask) => (item.id === taskId));
  const updatedTask = { ...tasks[index], ...task };
  tasks[index] = updatedTask;
  return updatedTask;
};

const deleteTask = async (id: string) => {
  const index = tasks.findIndex((task: ITask) => (task.id === id));
  if (index < 0) return false;
  tasks.splice(index, 1);
  return true;
};

export { getAllTasks, createTask, readTask, updateTask, deleteTask };