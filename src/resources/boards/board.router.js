import { Router } from 'express';
import { getAll, create, read, update, remove} from './board.service';
import Board from './board.model';

const router = Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const boards = await getAll();
      res.status(200).json(boards.map(Board.toResponse));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })

  .post(async (req, res) => {
    try {
      const board = await create(req.body);
      res.status(201).json(Board.toResponse(board));
    } catch (e) {
      res.status(400).send(e.message);
    }
  });


router.route('/:id')
  .get(async (req, res) => {
    try {
      const board = await read(req.params.id);
      if (board) {
        res.status(200).json(Board.toResponse(board));
      } else {
        throw new Error(404, `Not found`);
      }
    } catch (e) {
      res.status(404).send(e.message);
    }
  })

  .put(async (req, res) => {
    try {
      const board = await update(req.params.id, req.body);
      if (board) {
        res.json(Board.toResponse(board));
      } else {
        throw new Error(404, `Not found`);
      }
    } catch (e) {
     res.status(404).send(e.message);
    }
  })

  .delete(async (req, res) => {
    const board = await remove(req.params.id);
    if (board) {
      res.status(200).send();
    } else {
      throw new Error(404, `Not found`);
    }
  });

  export default router;
