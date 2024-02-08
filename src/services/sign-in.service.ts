import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

import User from '../schemas/user';

export const signInService = async (data: Request): Promise<{ message: string, status: number }> => {
  const { email, password } = data.body.data;
  const user = await User.findOne({ email });

  if (!user) return { message: 'User not found', status: 404 };

  const validated = await bcrypt.compare(password, user.password);
  if (!validated) return { message: 'Wrong credentials', status: 401 };

  const token = jwt.sign({
    sub: user._id,
    email: user.email
  }, process.env.JWT_SECRET, { expiresIn: '7d' });

  return { message: token, status: 200 };
}
