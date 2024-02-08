import { Request, Response } from 'express';

import {
  deleteRecordsService,
  getRecordsService,
  postRecordsService
} from '../services';

export const getRecords = async (req: Request, res: Response): Promise<Response> => {
  const resp = await getRecordsService();
  return res.status(200).json(resp);
};

export const deleteRecord = async (req: Request, res: Response): Promise<Response> => {
  const resp = await deleteRecordsService(req);
  return res.status(200).json(resp);
};

export const postRecord = async (req: Request, res: Response): Promise<Response> => {
  const resp = await postRecordsService(req);
  return res.status(200).json(resp);
};
