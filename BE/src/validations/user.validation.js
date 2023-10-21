async function validateGetUser(data) {
  try {
    if (!data || data.length < 1) {
      const error = new Error('User Not Found');
      error.code = 404;
      throw error;
    }

    return data;
  } catch (error) {
    // eslint-disable-next-line no-throw-literal
    throw {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate User Failed',
    };
  }
}

async function validateCreateUser(userInput) {
  try {
  } catch (error) {
  }
}

async function validateEditUser(userInput, userData) {
  try {
  } catch (error) {
  }
}

async function validateDeleteUser(userData) {
  try {
  } catch (error) {
  }
}

module.exports = {
  validateGetUser,
  validateCreateUser,
  validateEditUser,
  validateDeleteUser,
};
