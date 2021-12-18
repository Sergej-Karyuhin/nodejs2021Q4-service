import { Router } from 'express';
import { getAll, create, read, update, remove} from './board.service';
import Board from './board.model';

const router = Router();

router.route('/')
  .get(async (_, res) => {
    try {
      const boards = await getAll();
      res.status(200).json(boards.map(Board.toResponse));
    } catch (e) {
      res.status(404).send();
    }
  })

  .post(async (req, res) => {
    try {
      const board = await create(req.body);
      res.status(201).json(Board.toResponse(board));
    } catch (e) {
      res.status(400).send();
    }
  });


router.route('/:id')
  .get(async (req, res) => {
    const board = await read(req.params.id);
    if (board) {
      res.status(200).json(Board.toResponse(board));
    } else {
      res.status(404).send();
    }
  })

  .put(async (req, res) => {
    const board = await update(req.params.id, req.body);
    if (board) {
      res.json(Board.toResponse(board));
    } else {
      res.status(404).send();
    }
  })

  .delete(async (req, res) => {
    const board = await remove(req.params.id);
    if (board) {
      res.status(200).send();
    } else {
      res.status(404).send();
    }
  });

  export default router;
