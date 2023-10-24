const { check, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');
const AES = require('crypto-js/aes');
const randomstring = require('randomstring');

async function validateAccountInfo(req) {
  try {
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

async function validateGetAccount(data) {
  try {
  } catch (error) {
  }
}

async function validateCreateAccount(accountInput, accountExist) {
  try {
  } catch (error) {
  }
}

async function validateEditAccount(accountInput, accountData) {
  try {
  } catch (error) {
  }
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
};
