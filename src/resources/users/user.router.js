const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/')
  .get(async (req, res) => {
    try {
      const users = await usersService.getAll();
      res.status(200).json(users.map(User.toResponse));
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  .post(async (req, res) => {
    try {
      const user = await usersService.create(req.body);
      res.status(201).json(User.toResponse(user));
    } catch (e) {
      res.status(400).send(e.message);
    }
  });


  router.route('/:id')
    .get(async (req, res) => {
      try {
        const user = await usersService.read(req.params.id);
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
        const user = await usersService.update(req.params.id, req.body);
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
      const user = await usersService.remove(req.params.id);
      if (user) {
        res.status(200).send();
      } else {
        throw new Error(404, `Not found`);
      }
    });

module.exports = router;
