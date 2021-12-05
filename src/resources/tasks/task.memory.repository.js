const { tasks } = require('../../../mock/data');
const Task = require('./task.model');

const getAllTasks = async (boardId) => tasks.filter((task) => (task.boardId === boardId));

const createTask = async (task) => {
  const newTask = new Task(task);
  tasks.push(newTask);
  return newTask;
};

const readTask = async (id) => tasks.find((task) => (task.id === id));

const updateTask = async (boardId, taskId, task) => {
  const index = tasks.findIndex((item) => (item.id === taskId));
  const updatedTask = { ...tasks[index], ...task };
  tasks[index] = updatedTask;
  return updatedTask;
};

const deleteTask = async (id) => {
  const index = tasks.findIndex((task) => (task.id === id));
  if (index < 0) return false;
  tasks.splice(index, 1);
  return true;
};

const getAll = async () => tasks;

module.exports = { getAllTasks, createTask, readTask, updateTask, deleteTask, getAll };
