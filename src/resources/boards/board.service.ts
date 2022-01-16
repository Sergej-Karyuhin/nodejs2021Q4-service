import * as boardsRepo from "./board.memory.repository";
import { BoardDB } from '../../entities/Board';

const getAll = (): Promise<BoardDB[]> => boardsRepo.getAll();
const getBoard = (id: string): Promise<BoardDB | null> => boardsRepo.getById(id);
const save = (title: string, columns: []): Promise<BoardDB> =>
  boardsRepo.save(title, columns);
const update = (id: string, title: string, columns: []): Promise<BoardDB | null> =>
  boardsRepo.update(id, title, columns);
const remove = (id: string): Promise<boolean> => boardsRepo.remove(id);

export { getAll, getBoard, save, update, remove };
