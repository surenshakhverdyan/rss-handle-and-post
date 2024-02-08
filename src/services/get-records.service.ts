import Record, { IRecord } from '../schemas/record';

export const getRecordsService = async (): Promise<IRecord[]> => {
  const records = await Record.find();

  return records;
};
