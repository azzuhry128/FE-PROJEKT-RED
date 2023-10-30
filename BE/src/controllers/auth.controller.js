const {
  getAccountByUsername,
  updateAccount,
} = require('../services/account.service');

const {
  validateAccountInfo,
  validateGetAccount,
} = require('../validations/account.validation');

const {
  validateSignIn,
} = require('../validations/auth.validation');

const {
  generateJwtToken,
} = require('../services/auth.service');

exports.signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    await validateAccountInfo(req);

    const accountData = await getAccountByUsername(username);

    await validateGetAccount(accountData);

    const token = await generateJwtToken(accountData.account_id);

    const editedAccount = await validateSignIn(password, accountData, token);

    await updateAccount(editedAccount);

    return res.json({
      success: true,
      code: 200,
      message: 'Sign In Success',
      data: {
        token,
      },
    });
  } catch (error) {
    return res.json(error);
  }
};
