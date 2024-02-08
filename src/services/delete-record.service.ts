import { Request } from 'express';

import Record, { IRecord } from '../schemas/record';

export const deleteRecordsService = async (data: Request): Promise<IRecord> => {
  const { _id } = data.body;

  const record = await Record.findByIdAndDelete(_id);

  return record;
};
