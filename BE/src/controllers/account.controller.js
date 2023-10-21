//! SIAPAPUN YANG BERANI NGUSIK INI CONTROLLER, GUA BACOK LO!!!!!

const {
  getAllAccount, getAccountByUsername, storeAccount, updateAccount, destroyAccount,
} = require('../services/account.service');
const {
  validateGetAccount, validateCreateAccount, validateEditAccount,
} = require('../validations/account.validation');

exports.fetchAllAccount = async (req, res) => {
  try {
    const accountData = await getAllAccount();

    await validateGetAccount(accountData);

    return res.json({
      success: true,
      code: 200,
      message: 'Account Fetch Success',
      data: accountData,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.fetchAccountByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const accountData = await getAccountByUsername(username);

    await validateGetAccount(accountData);

    return res.json({
      success: true,
      code: 200,
      message: 'Account Fetch Success',
      data: accountData,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.createAccount = async (req, res) => {
  try {
    const accountInput = req.body;

    const accountExists = await getAccountByUsername(accountInput.username);

    const accountData = await validateCreateAccount(accountInput, accountExists);

    await storeAccount(accountData);

    return res.json({
      success: true,
      code: 200,
      message: 'Account created',
      data: accountData,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.editAccount = async (req, res) => {
  try {
    const { username } = req.params;
    const accountInput = req.body;

    const accountData = await getAccountByUsername(username);

    await validateEditAccount(accountInput, accountData);

    await updateAccount(accountInput, accountData);

    return res.json({
      success: true,
      code: 200,
      message: 'Account updated',
      data: accountData,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const { username } = req.params;

    const accountData = await getAccountByUsername(username);

    // await validateDeleteAccount(accountData);

    await destroyAccount(accountData);

    return res.json({
      success: true,
      code: 200,
      message: 'Account deleted',
    });
  } catch (error) {
    return res.json(error);
  }
};
