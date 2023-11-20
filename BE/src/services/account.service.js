require('../../config/database.json');
const { Account } = require('../models');

async function getAllAccount() {
  try {
    const accountData = await Account.findAll();
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

async function getAccountByAccountId(accountId) {
  try {
    const accountData = await Account.findOne({
      where: {
        account_id: accountId
      }
    })
    return accountData

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

async function getAccountByUsername(user_name) { 
  try {
    const accountData = await Account.findOne({
      where: {
        username: user_name
      }
    })

    return accountData

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
     await Account.create(accountData)
     return null
     
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to create an account',
      errors: error,
    };

    throw errors;
  }
}

async function updateAccount(accountInput, accountData) {
  try {
    await accountData.update(accountInput)
    return null

  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to update the account',
      errors: error,
    };

    throw errors;
  }
}

async function destroyAccount(accountData) {
  try {
    await accountData.destroy()
    return null
    
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to delete an account',
      errors: error,
    };

    throw errors;
  }
}

module.exports = {
  getAllAccount,
  getAccountByAccountId,
  getAccountByUsername,
  storeAccount,
  updateAccount,
  destroyAccount,
};
