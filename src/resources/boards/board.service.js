const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAllBoards();
const create = (board) => boardsRepo.createBoard(board);
const read = (id) => boardsRepo.readBoard(id);
const update = (id, board) => boardsRepo.updateBoard(id, board);
const remove = (id) => boardsRepo.deleteBoard(id);

module.exports = { getAll, create, read, update, remove };
