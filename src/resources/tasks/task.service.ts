import * as tasksRepo from './task.memory.repository';
import { TaskDB } from '../../entities/Task';

const getAll = (): Promise<TaskDB[]> => tasksRepo.getAll();

const getTask = (id: string): Promise<TaskDB | null> => tasksRepo.getById(id);

const save = (
  title: string,
  order: number,
  description: string,
  userId: string,
  boardId: string,
  columnId: string
): Promise<TaskDB> =>
  tasksRepo.save(title, order, description, userId, boardId, columnId);

const update = (
  id: string,
  title: string,
  order: number,
  description: string,
  userId: string,
  boardId: string,
  columnId: string
): Promise<TaskDB | null> =>
  tasksRepo.update(id, title, order, description, userId, boardId, columnId);

const deleteTaskById = (id: string): Promise<boolean> => tasksRepo.deleteTaskById(id);

const deleteTaskByBoardID = (boardId: string): Promise<void> =>
  tasksRepo.deleteTaskByBoardID(boardId);
  
const resetID = (userId: string): Promise<void> => tasksRepo.resetID(userId);

export { getAll, getTask, save, update, deleteTaskById, deleteTaskByBoardID, resetID };
