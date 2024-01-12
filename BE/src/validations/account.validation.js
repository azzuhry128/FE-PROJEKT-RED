const { check, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const AES = require('crypto-js/aes');
const randomstring = require('randomstring');

async function validateAccountInfo(req) {
  try {
    const { accountId } = req;
    const { accountIdParam } = req.params;

    await check('username', 'Username is required').not().isEmpty()
      .run(req);
    await check('password', 'Password Number is required').not().isEmpty()
      .run(req);

    await check('user_id', 'User Id is required').not().isEmpty()
      .run(req);

    const accountValidations = validationResult(req);
    if (!accountValidations.isEmpty()) {
      const error = new Error(accountValidations.array()[0].msg);
      error.code = 422;
      throw error;
    }

    if (req.method === 'put') {
      if (accountIdParam !== accountId) {
        const error = new Error('Account tidak dapat diakses');
        error.code = 422;
        throw error;
      }
    }

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Account Failed',
    };

    throw errors;
  }
}

async function validateGetAccount(accountData, jwtAccountId = null) {
  try {
    if (!accountData || accountData.length < 1) {
      const error = new Error('Account Not Found');
      error.code = 404;
      throw error;
    }

    let data = accountData;

    if (!Array.isArray(accountData)) {
      if (jwtAccountId !== accountData.account_id) {
        data = {
          account_id: accountData.account_id,
          username: accountData.username,
          online: accountData.online,
          user: accountData.user,
        };
      }
    } else {
      const datas = accountData.map((account) => ({
        account_id: account.account_id,
        username: account.username,
        online: account.online,
        user: account.user,
      }));

      data = datas;
    }

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Account Failed',
    };

    throw errors;
  }
}

async function validateCreateAccount(accountInput, accountExist) {
  try {
    if (accountInput === accountExist) {
      const error = new Error('Similar Account Found, Please try Other!');
      error.code = 404;
      throw error;
    }

    const newAccount = {
      account_id: uuidv4(),
      username: `${accountInput.username}#${randomstring.generate({ charset: 'numeric', length: 4 })}`,
      password: AES.encrypt(accountInput.password, process.env.AES_SECRET).toString(),
      online: false,
      user_id: accountInput.user_id || null,
    };

    return newAccount;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Account Failed',
    };

    throw errors;
  }
}

async function validateEditAccount(accountInput, accountData) {
  try {
    if (!accountData) {
      const error = new Error('Account tidak ditemukan');
      error.code = 404;
      throw error;
    }

    if (accountInput.user_id !== accountData.user.user_id) {
      const error = new Error('Username sudah digunakan');
      error.code = 404;
      throw error;
    }

    const usernameData = accountInput.username
      && !accountInput.username.includes('#')
      ? `${accountInput.username}#${randomstring.generate({ charset: 'numeric', length: 4 })}`
      : accountData.username;

    const passwordData = accountInput.password
      ? AES.encrypt(accountInput.password, process.env.AES_SECRET).toString()
      : accountData.password;

    const updatedAccount = {
      account_id: accountData.account_id,
      username: usernameData,
      password: passwordData,
      online: accountInput.online || accountData.online,
      user_id: accountData.user_id,
      access_token: accountInput.access_token || accountInput.access_token,
    };

    return updatedAccount;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Account Failed',
    };

    throw errors;
  }
}

async function validateResetPassword(newPassword, accountData){
  try{
    if (!newPassword){
      const error = new Error('Password tidak boleh kosong!');
      error.code = 404;
      throw error;
    };

    if (newPassword.length < 4 && newPassword.length > 16){
      const error = new Error('Password harus terdiri hanya dari 4-16 karakter!');
      error.code = 404;
      throw error;
    };

    if (newPassword == accountData.password){
      const error = new Error('Password tidak boleh sama!');
      error.code = 404;
      throw error;
    };

    const updatedPassword = {
      account_id: accountData.user_id,
      username: accountData.username,
      password: AES.encrypt(newPassword, process.env.AES_SECRET).toString(),
      online: accountData.online,
      user_id: accountData.user_id || null,
      access_token: accountData.access_token,
    };

    return updatedPassword;

  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Reset Password Failed',
    };

    throw errors;
  }
};

async function validateChangeEmail(newEmail, accountData) {

}
// async function validateDeleteAccount(accountData) {
//   try {
//   } catch (error) {
//   }
// }

module.exports = {
  validateAccountInfo,
  validateGetAccount,
  validateCreateAccount,
  validateEditAccount,
  // validateDeleteAccount,
  validateResetPassword,
  validateChangeEmail,
};
