import { Router } from 'express';
import { getAll, create, read, update, remove } from './user.service';
import User from './user.model';

const router = Router();

router.route('/')
  .get(async (_, res) => {
    const users = await getAll();
    if (users) {
      res.status(200).json(users.map(User.toResponse));
    } else {
      res.status(400).send();
    }
  })

  .post(async (req, res) => {
    const user = await create(req.body);
    if (user) {
      res.status(201).json(User.toResponse(user));
    } else {
      res.status(400).send();
    }
  });


  router.route('/:id')
    .get(async (req, res) => {
      const user = await read(req.params.id);
      if (user) {
        res.status(200).json(User.toResponse(user));
      } else {
        res.status(404).send();
      }

    })

    .put(async (req, res) => {
      const user = await update(req.params.id, req.body);
      if (user) {
        res.status(200).json(User.toResponse(user));
      } else {
        res.status(400).send();
      }
    })

    .delete(async (req, res) => {
      const user = await remove(req.params.id);
      if (user) {
        res.status(204).send();
      } else {
        res.status(404).send();
      }
    });

export default router;
