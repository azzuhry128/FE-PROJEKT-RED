const jwt = require('jsonwebtoken');

async function genrateJwtToken(accountId) {
  try {
    const token = await jwt.sign({ accountId }, process.env.JWT_SECRET, {
      algorithm: 'HS256', expiresIn: '1d',
    });

    return token;
  } catch (error) {
    const errors = {
      success: false,
      code: 500,
      message: 'Failed to generate JWT token',
      errors: error,
    };

    throw errors;
  }
}

module.exports = {
  genrateJwtToken,
};
