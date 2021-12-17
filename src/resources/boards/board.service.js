import { getAllBoards, createBoard, readBoard, updateBoard, deleteBoard } from './board.memory.repository';

const getAll = () => getAllBoards();
const create = (board) => createBoard(board);
const read = (id) => readBoard(id);
const update = (id, board) => updateBoard(id, board);
const remove = (id) => deleteBoard(id);

export { getAll, create, read, update, remove };