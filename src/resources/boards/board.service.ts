import { getAllBoards, createBoard, readBoard, updateBoard, deleteBoard } from './board.memory.repository';
import { IBoard } from './board.model';

const getAll = () => getAllBoards();
const create = (board: IBoard) => createBoard(board);
const read = (id: string) => readBoard(id);
const update = (id: string, board: IBoard) => updateBoard(id, board);
const remove = (id: string) => deleteBoard(id);

export { getAll, create, read, update, remove };