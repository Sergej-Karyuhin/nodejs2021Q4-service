const Board = require('./board.model');

const boards = [];
const boardNames = ['FooBoard', 'BarBoard', 'BazBoard'];
boardNames.forEach((board) => boards.push(new Board({ title: board })));

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

const deleteBoard = async (id) => {
  const index = boards.findIndex((board) => (board.id === id));
  if (index < 0) return false;
  boards.splice(index, 1);
  return true;
};

module.exports = { getAllBoards, createBoard, readBoard, updateBoard, deleteBoard };
