import { v4 as uuid } from 'uuid';
import Column from '../boards/column.model';

class Board {
  id?: string;

  title: string;

  columns: Column[];

  constructor({ title, columns }: Board) {
    this.id = uuid();
    this.title = title;
    this.columns = [];
    columns.forEach((col: Column) => {
      this.columns.push(new Column({ title: col.title, order: col.order }));
    });
  }
}

export default Board;
