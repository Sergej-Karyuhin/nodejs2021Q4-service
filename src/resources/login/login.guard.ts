import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { getUser } from '../users/user.service'

interface IDecodeData {
  id: string,
  login: string
}

const loginGuard = async (req: Request, res: Response, next: NextFunction) => {
  const loginToken = req.headers.authorization;

  if (loginToken) {
    const [type, token] = loginToken.split(' ');

    if (type === 'Bearer') {
      try {
        const decoded = jwt.verify(token as string, process.env.JWT_SECRET_KEY) as IDecodeData;
        const user = await getUser(decoded.id);

        if (user) {
          next();
          return;
        }
      } catch (err) {
        res.status(401).send('Unauthorized!');
      }
    }
  }

  res.status(401).send('Unauthorized!');
};

export default loginGuard;