const jwt = require('jsonwebtoken');

async function generateJwtToken(accountId) {
  try {
    const token = await jwt.sign({ accountId }, process.env.JWT_SECRET, {
      algorithm: 'HS256',
      expiresIn: '1d',
    });

    const expiredAt = new Date();
    expiredAt.setDate(expiredAt.getDate() + 1);

    const data = {
      token,
      expiredAt,
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

async function verifyToken(req) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    return decoded;
  } catch (error) {
    const errors = {
      success: false,
      code: 401,
      message: 'Token tidak valid',
      errors: error || error.errorInfo,
    };

    throw errors;
  }
}

module.exports = {
  generateJwtToken,
  verifyToken,
};
