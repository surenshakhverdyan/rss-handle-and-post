import mongoose, { Schema } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
}

export const UserSchema = new Schema({
  email: { type: String },
  password: { type: String },
});

export default mongoose.model<IUser>('User', UserSchema);
