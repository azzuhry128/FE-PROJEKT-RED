const { getUserByEmail } = require('../services/user.service');

const { validateGetUser } = require('../validations/user.validation');

const {
  getAccountByUserId,
  updateAccount,
} = require('../services/account.service');

const {
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
    const { email, password } = req.body;

    // await validateAccountInfo(req);

    const { user_id: userId } = await getUserByEmail(email);

    await validateGetUser(userId);

    const accountData = await getAccountByUserId(userId);

    await validateGetAccount(accountData);

    const jwtData = await generateJwtToken(accountData.dataValues.account_id);

    const editedAccount = await validateSignIn(password, accountData, jwtData.token);

    await updateAccount(editedAccount);

    return res.json({
      success: true,
      code: 200,
      message: 'Sign In Success',
      data: jwtData,
    });
  } catch (error) {
    return res.json(error);
  }
};
