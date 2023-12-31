const { generate } = require('randomstring');

const {
  sendRegisteredMail,
  sendForgetPasswordMail,
  sendChangeEmailMail,
} = require('../services/mail.service');

exports.getRegisterMail = async (req, res) => {
  try {
    const { username, email } = req.body;

    const otp = generate({ charset: 'numeric', length: 4 });

    sendRegisteredMail(username, email, otp);

    return res.json({
      success: true,
      code: 200,
      message: 'send to email success',
      data: {
        otp,
      },
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.getTokenForgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const otp = generate({ charset: 'numeric', length: 4 });

    sendForgetPasswordMail(email, otp);

    return res.json({
      success: true,
      code: 200,
      message: 'forget password token send to email success',
      data: {
        otp,
      },
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.getTokenChangeEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const otp = generate({ charset: 'numeric', length: 4 });

    sendChangeEmailMail(email, otp);

    return res.json({
      success: true,
      code: 200,
      message: 'change email token send to email success',
      data: {
        otp,
      },
    });
  } catch (error) {
    return res.json(error);
  }
};
