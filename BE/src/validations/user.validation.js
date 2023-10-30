const { check, validationResult } = require('express-validator');

async function validateUserInfo(req) {
  try {
    await check('profile_name', 'Profile Name is required').not().isEmpty()
      .run(req);
    await check('email', 'Email is required').not().isEmpty().isEmail()
      .run(req);
    await check('image', 'Image is required').not().isEmpty()
      .run(req);

    const userValidations = validationResult(req);
    if (!userValidations.isEmpty()) {
      const error = new Error(userValidations.array()[0].msg);
      error.code = 422;
      throw error;
    }

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate User Failed',
    };

    throw errors;
  }
}

async function validateGetUser(data) {
  try {
    if (!data || data.length < 1) {
      const error = new Error('User Not Found');
      error.code = 404;
      throw error;
    }

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate User Failed',
    };

    throw errors;
  }
}

async function validateCreateUser(userInput, userExists) {
  try {
  } catch (error) {
  }
}

async function validateEditUser(userInput, userData, userExistsByEmail) {
  try {
  } catch (error) {
  }
}

// async function validateDeleteUser(userData) {
//   try {
//   } catch (error) {
//   }
// }

module.exports = {
  validateUserInfo,
  validateGetUser,
  validateCreateUser,
  validateEditUser,
  // validateDeleteUser,
};
