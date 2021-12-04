const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/')
  .get(async (req, res) => {
    try {
      const boards = await boardsService.getAll();
      res.status(200).json(boards.map(Board.toResponse));
    } catch (e) {
      res.status(404).send(e.message);
    }
  })

  .post(async (req, res) => {
    try {
      const board = await boardsService.create(req.body);
      res.status(201).json(Board.toResponse(board));
    } catch (e) {
      res.status(400).send(e.message);
    }
  });


router.route('/:id')
  .get(async (req, res) => {
    try {
      const board = await boardsService.read(req.params.id);
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
      const board = await boardsService.update(req.params.id, req.body);
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
    const board = await boardsService.remove(req.params.id);
    if (board) {
      res.status(200).send();
    } else {
      throw new Error(404, `Not found`);
    }
  });

module.exports = router;
