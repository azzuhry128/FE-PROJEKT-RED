const { v4: uuidv4 } = require('uuid');
const { check, validationResult } = require('express-validator');

async function validateUserChatInfo(req) {
  try {
    await check('accountId', 'Nama tidak boleh kosong').not().isEmpty()
      .run(req);

    const chatRoomValidations = validationResult(req);
    if (!chatRoomValidations.isEmpty()) {
      const error = new Error(chatRoomValidations.array()[0].msg);
      error.code = 422;
      throw error;
    }

    // if (req.method === 'put') {
    //   if (accountIdParam !== accountId) {
    //     const error = new Error('Chat Room tidak dapat diakses');
    //     error.code = 422;
    //     throw error;
    //   }
    // }

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Chat Room Failed',
    };

    throw errors;
  }
}

async function validateGetUserChat(userChatData) {
  try {
    if (!userChatData || userChatData.length < 1) {
      const error = new Error('Chat Not Found');
      error.code = 404;
      throw error;
    }

    const data = userChatData;

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Get Chat Room Failed',
    };

    throw errors;
  }
}

async function validateCreateUserChat(chatRoomId, accountId) {
  try {
    const data = {
      chat_id: uuidv4(),
      account_id: accountId,
      chat_room_id: chatRoomId,
    };

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Create Chat Room Failed',
    };

    throw errors;
  }
}

async function validateUpdateUserChat(userChatData, newuserChatData) {
  try {
    const data = {
      name: newuserChatData.name || userChatData.name,
      image: newuserChatData.image || userChatData.image,
      is_group_chat: userChatData.is_group_chat,
      room_status: newuserChatData.romm_status || userChatData.room_status,
    };

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Update Chat Room Failed',
    };

    throw errors;
  }
}

async function validateDeleteUserChat(userChatData) {
  try {
    if (!userChatData || userChatData.length < 1) {
      const error = new Error('Chat Not Found');
      error.code = 404;
      throw error;
    }

    const data = userChatData;

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Delete Chat Room Failed',
    };

    throw errors;
  }
}

module.exports = {
  validateUserChatInfo,
  validateGetUserChat,
  validateCreateUserChat,
  validateUpdateUserChat,
  validateDeleteUserChat,
};
