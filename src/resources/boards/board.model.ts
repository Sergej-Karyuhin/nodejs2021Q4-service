const { v4: uuidv4 } = require('uuid');

export interface IBoard {
  id: string;
  title: string;
  columns: any;
}

class Board {
  id: string;

  title: string;

  columns: any;

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
