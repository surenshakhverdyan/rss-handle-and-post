import { Request, Response } from "express";

import { rssHandlerService } from "../services";

export const rssHandler = async (req: Request, res: Response): Promise<Response> => {
  const resp = await rssHandlerService(req);
  return res.status(200).json(resp);
}
