const jwt = require('jsonwebtoken');

async function generateJwtToken(accountId) {
  try {
    const token = await jwt.sign({ accountId }, process.env.JWT_SECRET, {
      algorithm: 'HS256', expiresIn: '1d',
    });

    const data = {
      token,
      expiredAt: new Date(Date.now() + 86400000),
    };

    return data;
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
  generateJwtToken,
};
