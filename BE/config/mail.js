require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    type: 'login',
    user: process.env.MAIL_USERNAME,
    pass: `${process.env.MAIL_PASSWORD}`,
  },
});

module.exports = { transporter };
