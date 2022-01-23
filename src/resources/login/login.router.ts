import Router from 'express';
import * as loginService from './login.service';

const router = Router();

router.route('/').post(async (req, res) => {
  const { body: { login }} = req;
  const token = await loginService.getToken(login);

  if (!token) {
    res.status(403).send('Forbidden');
  } else {
    res.status(200).json({ token });
  }
});

export default router;