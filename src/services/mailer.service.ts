import transporter from '../config/mailer';

export const mailerService = async (data: any): Promise<boolean> => {
  transporter.sendMail({
    from: process.env.EMAIL_ADDRESS,
    to: data.email,
    subject: 'Forgot Password',
    html: data.content
  });

  return true;
}
