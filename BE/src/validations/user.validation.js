const { check, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

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
    if (userExists) {
      const error = { success: false, code: 400, message: 'Email was already used' };
      throw error;
    }

    const newUser = {
      user_id: uuidv4(),
      profile_name: userInput.profile_name,
      email: userInput.email,
      image: userInput.image,
      phone: userInput.phone || null,
      bio: userInput.bio,
    };

    return newUser;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 500,
      message: error.message || 'validate user failed',
    };
    throw errors;
  }
}

async function validateEditUser(userInput, userData, userExistsByEmail) {
  try {
    if (userExistsByEmail) {
      if (userExistsByEmail.user_id !== userData.user_id) {
        const error = { success: false, code: 400, message: 'Email was already used' };
        throw error;
      }
    }

    const updateUser = {
      user_id: userData.user_id,
      profile_name: userInput.profile_name || userData.profile_name,
      email: userInput.email || userData.email,
      image: userInput.image || userData.image,
      phone: userInput.phone || userData.phone || null,
      bio: userInput.bio,
    };

    return updateUser;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 500,
      message: error.message || 'validate user failed',
    };
    throw errors;
  }
}

module.exports = {
  validateUserInfo,
  validateGetUser,
  validateCreateUser,
  validateEditUser,
  // validateDeleteUser,
};
