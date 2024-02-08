import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';

import User from '../schemas/user';

export const resetPasswordService = async (data: Request): Promise<{ message: boolean | string, status: number }> => {
  const { password, passwordConfirm } = data.body;

  if (password !== passwordConfirm) return { message: 'Passwords do not match', status: 403 };

  const payload = jwt.verify(data.params.token, process.env.JWT_SECRET);
  const hashedPassword = await bcrypt.hash(password, 10);

  await User.findByIdAndUpdate(payload.sub, {
    $set: { password: hashedPassword },
  }, { new: true });

  return { message: true, status: 200 };
}
