import { Request, Response } from 'express';

import {
  forgotPasswordService,
  resetPasswordService,
  signInService
} from '../services';

export const signIn = async (req: Request, res: Response): Promise<Response> => {
  const resp = await signInService(req);
  return res.status(resp.status).json(resp.message);
};

export const forgotPassword = async (req: Request, res: Response): Promise<Response> => {
  const resp = await forgotPasswordService(req);
  return res.status(resp.status).json(resp.message);
};

export const resetPassword = async (req: Request, res: Response): Promise<Response> => {
  const resp = await resetPasswordService(req);
  return res.status(resp.status).json(resp.message);
};
