import Board, { IBoard } from './board.model';
import { ITask } from '../tasks/task.model';
import { deleteTask } from '../tasks/task.memory.repository';

const { boards, tasks } = require('../../../mock/data');

const getAllBoards = async () => boards;

const createBoard = async (board: IBoard) => {
  const newBoard = new Board(board);
  boards.push(newBoard);
  return newBoard;
};

const readBoard = async (id: string) => boards.find((board: IBoard) => (board.id === id));

const updateBoard = async (id: string, updatedBoard: IBoard) => {
  const foundBoard = boards.find((board: IBoard) => (board.id === id));
  if (foundBoard) {
    foundBoard.title = updatedBoard.title;
    foundBoard.columns = updatedBoard.columns;
    return foundBoard;
  }
  return boards;
};

const deleteBoard = async (id: string) => {
  const index = boards.findIndex((board: IBoard) => board.id === id);
  if (index === -1) {
    throw new Error('Not found');
  }
  boards.splice(index, 1);
  tasks
    .filter((task: ITask) => task.boardId === id)
    .forEach((task: ITask) => deleteTask(task.id));
  return {};
};

export { getAllBoards, createBoard, readBoard, updateBoard, deleteBoard };
