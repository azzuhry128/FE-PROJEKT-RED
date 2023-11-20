require('../../config/database.json');
const { Account } = require('../models');

async function getAllAccount() {
  try {
  } catch (error) {
  }
}

async function getAccountByAccountId(account_id) {
  try {
  } catch (error) {
  }
}

async function getAccountByUsername(username) {
  try {
  } catch (error) {
  }
}

async function getAccountByUserId(userId) {
  try {
    const accountData = await Account.findOne({
      where: {
        user_id: userId,
      },
    });

    return accountData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch account data',
      errors: error,
    };

    throw errors;
  }
}

async function storeAccount(accountData) {
  try {
  } catch (error) {
  }
}

async function updateAccount(accountInput, accountData) {
  try {
  } catch (error) {
  }
}

async function destroyAccount(accountData) {
  try {
  } catch (error) {
  }
}

module.exports = {
  getAllAccount,
  getAccountByAccountId,
  getAccountByUsername,
  getAccountByUserId,
  storeAccount,
  updateAccount,
  destroyAccount,
};
