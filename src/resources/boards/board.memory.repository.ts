import { getRepository } from 'typeorm';
import { BoardDB } from '../../entities/Board';

const getAll = async (): Promise<BoardDB[]> => {
  const boardRepository = await getRepository(BoardDB);
  const allBoards = await boardRepository.find({ where: {} });
  return allBoards;
};

const getById = async (id: string): Promise<BoardDB | null> => {
  const boardRepository = await getRepository(BoardDB);
  const findBoard = await boardRepository.findOne(id);
  return findBoard ?? null;
};

const save = async (title: string, columns: []): Promise<BoardDB> => {
  const boardRepository = await getRepository(BoardDB);
  const newBoard = await boardRepository.save({ title, columns });
  await boardRepository.save(newBoard);
  return newBoard;
};

const update = async (
  id: string,
  title: string,
  columns: []
): Promise<BoardDB | null> => {
  const boardRepository = await getRepository(BoardDB);
  let findBoard = await boardRepository.findOne(id);
  if (findBoard === undefined) return null;
  await boardRepository.update(id, { title, columns });
  findBoard = await boardRepository.findOne(id);
  return findBoard ?? null;
};

const remove = async (id: string): Promise<boolean> => {
  const boardRepository = await getRepository(BoardDB);
  const deletedBoard = await boardRepository.delete(id);
  if (deletedBoard.affected) {
    return true;
  }
  return false;
};

export { getAll, save, getById, update, remove };
