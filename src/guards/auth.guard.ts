import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const authGuard = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
  const token = getToken(req);
  
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error: any) {
    return res.status(401).json('Unauthorized');
  }

  return next();
};

const getToken = (req: Request): string | undefined => {
  const [key, token] = req.headers.authorization?.split(' ') ?? [];
  return key === 'Bearer' ? token : undefined;
};
