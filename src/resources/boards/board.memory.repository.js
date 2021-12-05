const { boards, tasks } = require('../../../mock/data');
const Board = require('./board.model');
const { deleteTask } = require('../tasks/task.memory.repository');

const getAllBoards = async () => boards;

const createBoard = async (board) => {
  const newBoard = new Board(board);
  boards.push(newBoard);
  return newBoard;
};

const readBoard = async (id) => boards.find(board => (board.id === id));

const updateBoard = async (id, updatedBoard) => {
  const foundBoard = boards.find(board => (board.id === id));
  if (foundBoard) {
    foundBoard.title = updatedBoard.title;
    foundBoard.columns = updatedBoard.columns;
    return foundBoard;
  }
  return boards;
};

const deleteBoard = async id => {
  const index = boards.findIndex(board => board.id === id);
  if (index === -1) {
    throw new Error('Not found');
  }
  boards.splice(index, 1);
  tasks
    .filter(task => task.boardId === id)
    .forEach(task => deleteTask(task.id));
  return {};
};

module.exports = { getAllBoards, createBoard, readBoard, updateBoard, deleteBoard };
