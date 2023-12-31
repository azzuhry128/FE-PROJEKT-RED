// eslint-disable-next-line no-unused-vars
const nodemailer = require('nodemailer');
const { transporter } = require('../../config/mail');
const verificationRegister = require('../mail-template/email-verification');
const forgetPassword = require('../mail-template/forget-password');

async function sendRegisteredMail(username, userEmail, otp) {
  const info = await transporter.sendMail({
    from: `"Trashtalk" <${process.env.MAIL_USERNAME}>`,
    to: userEmail,
    subject: 'Verifikasi Akun',
    html: verificationRegister(username, otp),
  });

  return info;

  // console.log(`Message Sent ${info.messageId}`);
  // console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
}

async function sendForgetPasswordMail(userEmail, verificationCode) {
  const info = await transporter.sendMail({
    from: `"Trashtalk" <${process.env.MAIL_USERNAME}>`,
    to: userEmail,
    subject: 'Reset Password',
    html: forgetPassword(verificationCode),
  });

  return info;

  // console.log(`Message Sent ${info.messageId}`);
  // console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
}

async function sendChangeEmailMail(userEmail, verificationCode) {
  const info = await transporter.sendMail({
    from: `"Trashtalk" <${process.env.MAIL_USERNAME}>`,
    to: userEmail,
    subject: 'Change Email',
    html: forgetPassword(verificationCode),
  });

  return info;

  // console.log(`Message Sent ${info.messageId}`);
  // console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
}

module.exports = {
  sendRegisteredMail,
  sendForgetPasswordMail,
  sendChangeEmailMail,
};
