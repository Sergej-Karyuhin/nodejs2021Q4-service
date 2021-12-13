import { Router } from 'express';
import { getAll, create, read, update, remove } from './user.service';
import User from './user.model';

const router = Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const users = await getAll();
      res.status(200).json(users.map(User.toResponse));
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  .post(async (req, res) => {
    try {
      const user = await create(req.body);
      res.status(201).json(User.toResponse(user));
    } catch (e) {
      res.status(400).send(e.message);
    }
  });


  router.route('/:id')
    .get(async (req, res) => {
      try {
        const user = await read(req.params.id);
        if (user) {
          res.status(200).json(User.toResponse(user));
        } else {
          throw new Error(404, `Not found`);
        }
      } catch (e) {
        res.status(400).send(e.message);
      }
    })

    .put(async (req, res) => {
      try {
        const user = await update(req.params.id, req.body);
        if (user) {
          res.status(200).json(User.toResponse(user));
        } else {
          throw new Error(404, `Not found`);
        }
      } catch (e) {
        res.status(400).send(e.message);
      }
    })

    .delete(async (req, res) => {
      const user = await remove(req.params.id);
      if (user) {
        res.status(200).send();
      } else {
        throw new Error(404, `Not found`);
      }
    });

export default router;
