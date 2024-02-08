import mongoose, { Schema } from 'mongoose';

export interface IRecord {
  title: string;
  description: string;
  imageLink: string;
  gptDescription: string;
}

export const UserSchema = new Schema({
  title: { type: String },
  description: { type: String },
  imageLink: { type: String },
  gptDescription: { type: String }
});

export default mongoose.model<IRecord>('Record', UserSchema);
