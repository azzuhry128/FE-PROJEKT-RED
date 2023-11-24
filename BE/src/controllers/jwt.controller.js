const { verifyToken } = require('../services/jwt.service');
const { validateGetAccount } = require('../validations/account.validation');
const { getAccountByAccountId } = require('../services/account.service');

exports.jwtVerify = async (req, res, next) => {
  try {
    const decoded = await verifyToken(req);

    const accountData = getAccountByAccountId(decoded.accountId);

    await validateGetAccount(accountData);

    req.accountId = decoded.accountId;

    return next();
  } catch (error) {
    return res.json(error);
  }
};
