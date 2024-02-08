export const forgotPasswordTemplate = (link: string): string => {
  const content = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Welcome</title>
      </head>
      <body>
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center">
              <table width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 20px 0; text-align: center; background-color: #148053;">
                    <h1 style="color: #fff;">Reset password</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <p>To reset your password, please click the button below</p>
                    <a href="${link}" style="display: inline-block; padding: 10px 20px; background-color: #148053; color: #fff; text-decoration: none;">Reset password</a>
                    <p>If you didn't create an account on our website, you can safely ignore this email.</p>
                </td>
                </tr>
                <tr>
                  <td style="background-color: #f0f0f0; text-align: center; padding: 20px;">
                    <p>&copy; 2024 All rights reserved.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return content;
};
