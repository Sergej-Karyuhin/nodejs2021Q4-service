import User from '../src/resources/users/user.model';
const Task = require('../src/resources/tasks/task.model');
const Board = require('../src/resources/boards/board.model');

const NAMES_CONFIG = {
  users: ['Foo', 'Bar', 'Baz', 'Boris', 'Britva'],
  tasks: ['Banana', 'Bilberry', 'Blackberry'],
  boards: ['FooBoard', 'BarBoard', 'BazBoard'],
};

const users = NAMES_CONFIG.users.map((user, index) => new User(
  { name: user, login: `User ${index + 1}` }
));
const tasks = NAMES_CONFIG.tasks.map((task) => new Task({ title: task }));
const boards = NAMES_CONFIG.boards.map((board) => new Board({ title: board }));

module.exports = { users, tasks, boards };