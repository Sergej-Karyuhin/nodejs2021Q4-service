const { v4: uuidv4 } = require('uuid');

// interface IColumns {
//   id: string;
//   title: string;
//   order: number;
// }

export interface IBoard {
  id: string;
  title: string;
  columns: never[];
}

class Board {
  id: string;

  title: string;

  columns: never[];

  constructor({
    id = uuidv4(),
    title = 'Board',
    columns = []
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: IBoard) {
    return board;
  }
}

export default Board;
