const cryptojs = require('crypto-js');

async function validateSignIn(inputPassword, account, accessToken) {
  try {
    const passwordBytes = cryptojs.AES.decrypt(account.password, process.env.AES_SECRET);
    const passwordDecrypt = passwordBytes.toString(cryptojs.enc.Utf8);

    if (inputPassword !== passwordDecrypt) {
      const error = new Error();
      error.errorCode = 400;
      error.errorInfo = 'Password not match';

      throw error;
    }

    const updatedAccount = {
      ...account,
      online: true,
      access_token: accessToken,
    };

    return updatedAccount;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to validate sign in',
      errors: error,
    };

    throw errors;
  }
}

async function validateSignOut(account) {
  try {
    const updatedAccount = {
      ...account,
      online: false,
      access_token: null,
    };

    return updatedAccount;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to validate sign out',
      errors: error,
    };

    throw errors;
  }
}

module.exports = {
  validateSignIn,
  validateSignOut,
};
