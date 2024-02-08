import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

import User from '../schemas/user';
import { forgotPasswordTemplate } from '../templates/forgot-password.template';
import { mailerService } from './mailer.service';

export const forgotPasswordService = async (data: Request): Promise<{ message: string | boolean, status: number }> => {
  const { email } = data.body;
  const user = await User.findOne({ email: email });

  if (!user) return { message: 'User not found', status: 404 };

  const token = jwt.sign({
    sub: user._id,
    email: user.email
  }, process.env.JWT_SECRET, { expiresIn: '1h' });

  const link = `${process.env.BASE_URL}/change-password/${token}`;
  const content = forgotPasswordTemplate(link);
  data.body.content = content;

  await mailerService(data.body);
  return { message: true, status: 500 };
};
