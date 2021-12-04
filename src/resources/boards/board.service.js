const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAllBoards();
const create = (board) => boardsRepo.createBoard(board);
const read = (id) => boardsRepo.readBoard(id);
const update = (id, board) => boardsRepo.updateBoard(id, board);

const remove = async (id) => {
  const boards = await tasksService.getAll();
  const newBoards = boards
    .filter((board) => (board.boardId === id))
    .map(el => tasksService.update(null, el.id, { boardId: null }));
  return Promise.all([newBoards, boardsRepo.deleteBoard(id)]);
};

module.exports = { getAll, create, read, update, remove };
