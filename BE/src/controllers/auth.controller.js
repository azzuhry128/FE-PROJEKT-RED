const {
  getUserByEmail,
  storeUser,
} = require('../services/user.service');

const {
  validateUserInfo,
  validateGetUser,
  validateCreateUser,
} = require('../validations/user.validation');

const {
  getAccountByUserId,
  getAccountByAccountId,
  storeAccount,
  updateAccount,
} = require('../services/account.service');

const {
  validateAccountInfo,
  validateGetAccount,
  validateCreateAccount,
} = require('../validations/account.validation');

const {
  validateSignIn,
  validateSignOut,
} = require('../validations/auth.validation');

const {
  generateJwtToken,
} = require('../services/jwt.service');

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // await validateAccountInfo(req);

    const user = await getUserByEmail(email);

    await validateGetUser(user);

    const accountData = await getAccountByUserId(user.dataValues.user_id);

    await validateGetAccount(accountData);

    const jwtData = await generateJwtToken(accountData.dataValues.account_id);

    const editedAccount = await validateSignIn(password, accountData.dataValues, jwtData.token);

    await updateAccount(editedAccount, accountData);

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

exports.signUp = async (req, res) => {
  try {
    const signUpInput = req.body;

    const userExists = await getUserByEmail(signUpInput.email);

    const userData = await validateCreateUser(signUpInput, userExists);

    const accountData = await validateCreateAccount(signUpInput, userExists);

    req.body.profile_name = accountData.username;
    req.body.user_id = userData.user_id;
    userData.profile_name = accountData.username;
    accountData.user_id = userData.user_id;

    await validateUserInfo(req);
    await validateAccountInfo(req);

    await storeUser(userData);
    await storeAccount(accountData);

    return res.json({
      success: true,
      code: 200,
      message: 'Sign Up Success',
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.signOut = async (req, res) => {
  try {
    const { accountId } = req;

    const accountData = await getAccountByAccountId(accountId);

    await validateGetAccount(accountData);

    const updatedAccount = await validateSignOut(accountData.dataValues);

    await updateAccount(updatedAccount, accountData);
    return res.json({
      success: true,
      code: 200,
      message: 'Sign Out Success',
    });
  } catch (error) {
    return res.json(error);
  }
};
