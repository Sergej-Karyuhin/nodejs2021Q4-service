import { Router } from 'express';
import { getAll, create, read, update, remove } from './task.service';
import Task from './task.model';

const router = Router({ mergeParams: true });

router.route('/')
  .get(async (req, res) => {
    try {
      const { boardId } = req.params as { boardId: string };
      const tasks = await getAll(boardId);
      res.status(200).json(tasks.map(Task.toResponse));
    } catch (e) {
      res.status(400);
    }
  })

  .post(async (req, res) => {
    const { boardId } = req.params as { boardId: string };
    const task = await create({ ...req.body, boardId });
    if (task) {
      res.status(201).json(Task.toResponse(task));
    } else {
      res.status(400);
    }
  });


router.route('/:id')
  .get(async (req, res) => {
    try {
      const task = await read(req.params.id);
      if (task) {
        res.status(200).json(Task.toResponse(task));
      } else {
        throw new Error(`Not found`);
      }
    } catch (e) {
      res.status(404).send();
    }
  })

  .put(async (req, res) => {
    const { boardId } = req.params as { boardId: string, id: string };
    const task = await update(boardId, req.params.id, req.body);
    if (task) {
      res.status(200).json(Task.toResponse(task));
    } else {
      res.status(400);
    }
  })

  .delete(async (req, res) => {
    const deleted = await remove(req.params.id);
    if (deleted) {
      res.status(200).send();
    } else {
      res.status(404);
    }
  });

  export default router;

