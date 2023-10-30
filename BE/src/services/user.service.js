require('../../config/database.json');
const { User } = require('../models');

async function getAllUser() {
  try {
    const userData = await User.findAll();
    return userData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch user data',
      errors: error,
    };

    throw errors;
  }
}

async function getUserByUserId(userId) {
  try {
    const userData = await User.findOne({
      where: {
        user_id: userId,
      },
    });

    return userData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch user data',
      errors: error,
    };

    throw errors;
  }
}

async function getUserByEmail(email) {
  try {
    const userData = await User.findOne({
      where: {
        email,
      },
    });

    return userData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch user data',
      errors: error,
    };

    throw errors;
  }
}

async function storeUser(userData) {
  try {
    await User.create(userData);
    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to store user data',
      errors: error,
    };

    throw errors;
  }
}

async function updateUser(userInput, userData) {
  try {
    await userData.update(userInput);
    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to update user data',
      errors: error,
    };

    throw errors;
  }
}

async function destroyUser(userData) {
  try {
    await userData.destroy();
    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to delete user data',
      errors: error,
    };

    throw errors;
  }
}

module.exports = {
  getAllUser,
  getUserByUserId,
  getUserByEmail,
  storeUser,
  updateUser,
  destroyUser,
};
