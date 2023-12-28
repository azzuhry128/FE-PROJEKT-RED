//! SIAPAPUN YANG BERANI NGUSIK INI CONTROLLER, GUA BACOK LO!!!!!

const {
  getAllUser, getUserByUserId, getUserByEmail, storeUser, updateUser, destroyUser,
} = require('../services/user.service');
const {
  validateUserInfo, validateGetUser, validateCreateUser, validateEditUser,
} = require('../validations/user.validation');

exports.fetchAllUser = async (req, res) => {
  try {
    const userData = await getAllUser();

    await validateGetUser(userData);

    return res.json({
      success: true,
      code: 200,
      message: 'User Fetch Success',
      data: userData,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.fetchUserByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const userData = await getUserByUserId(userId);

    await validateGetUser(userData);

    return res.json({
      success: true,
      code: 200,
      message: 'User Fetch Success',
      data: userData,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const userInput = req.body;

    await validateUserInfo(req);

    const userExists = await getUserByEmail(userInput.email);

    const userData = await validateCreateUser(userInput, userExists);

    await storeUser(userData);

    return res.json({
      success: true,
      code: 200,
      message: 'User created',
      // data: userData,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.editUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const userInput = req.body;

    const userData = await getUserByUserId(userId);

    await validateGetUser(userData);

    const userExistsByEmail = await getUserByEmail(userInput.email);

    const updatedUser = await validateEditUser(userInput, userData, userExistsByEmail);

    await updateUser(updatedUser, userData);

    return res.json({
      success: true,
      code: 200,
      message: 'User updated',
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const userData = await getUserByUserId(userId);

    await validateGetUser(userData);

    // userData = await validateDeleteUser(userData);

    await destroyUser(userData);

    return res.json({
      success: true,
      code: 200,
      message: 'User deleted',
    });
  } catch (error) {
    return res.json(error);
  }
};
