const { v4: uuidv4 } = require('uuid');

export interface ITask {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
}

class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string;

  boardId: string;

  columnId: string;

  constructor({
    id = uuidv4(),
    title = 'Task',
    order = 1,
    description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    userId = uuidv4(),
    boardId = uuidv4(),
    columnId = uuidv4(),
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: ITask) {
    return task;
  }
}

export default Task;