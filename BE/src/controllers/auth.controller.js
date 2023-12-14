const { getUserByEmail } = require('../services/user.service');

const { validateGetUser } = require('../validations/user.validation');

const {
  getAccountByUserId,
  getAccountByAccountId,
  updateAccount,
} = require('../services/account.service');

const {
  validateGetAccount,
  validateEditAccount,
} = require('../validations/account.validation');

const {
  validateSignIn,
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

// exports.signOut = async (req, res) => {
//   try {
//     const { accountId } = req;

//     const accountData = await getAccountByAccountId(accountId);

//     await validateGetAccount(accountData);

//     const updatedAccount = await validateEditAccount(accountData, {
//       online,
//     });
//     return res.json({
//       success: true,
//       code: 200,
//       message: 'Sign Out Success',
//     });
//   } catch (error) {
//     return res.json(error);
//   }
// };
