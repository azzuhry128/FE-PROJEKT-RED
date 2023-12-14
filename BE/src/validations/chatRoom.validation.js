const { v4: uuidv4 } = require('uuid');
const { check, validationResult } = require('express-validator');

async function validateGroupChatInfo(req) {
  try {
    // const { accountId } = req;
    // const { accountIdParam } = req.params;

    await check('name', 'Nama tidak boleh kosong').not().isEmpty()
      .run(req);

    await check('accountIds', 'Masukkan minimal 3 orang dalam group').isArray({ min: 3 }).run(req);

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

async function validateGetGroupChat(chatRoomData) {
  try {
    if (!chatRoomData || chatRoomData.length < 1) {
      const error = new Error('Group Chat Tidak Ditemukan');
      error.code = 404;
      throw error;
    }

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

async function validateCreateChatRoom(chatRoomData) {
  try {
    const data = {
      chat_room_id: uuidv4(),
      name: chatRoomData.name || null,
      image: chatRoomData.image || null,
      is_group_chat: chatRoomData.isGroupChat === true,
      room_status: chatRoomData.isGroupChat === true ? 'active' : 'pending',
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

async function validateUpdateChatRoom(chatRoomData, newChatRoomData) {
  try {
    const data = {
      name: newChatRoomData.name || chatRoomData.name,
      image: newChatRoomData.image || chatRoomData.image,
      is_group_chat: chatRoomData.is_group_chat,
      room_status: newChatRoomData.room_status || chatRoomData.room_status,
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

module.exports = {
  validateGroupChatInfo,
  validateGetGroupChat,
  validateCreateChatRoom,
  validateUpdateChatRoom,
};
