const { v4: uuidv4 } = require('uuid');
// const { check, validationResult } = require('express-validator');

async function validateMessageInfo(input) {
  try {
    if (!input.content && !input.image) {
      const error = new Error('Mohon isi pesan');
      error.code = 422;
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

async function validateGetMessage(messageData) {
  try {
    if (!messageData || messageData.length < 1) {
      const error = new Error('Message Not Found');
      error.code = 404;
      throw error;
    }

    const data = messageData;

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Get Message Failed',
    };

    throw errors;
  }
}

async function validateCreateMessage(chatRoomId, accountId, input) {
  try {
    const data = {
      message_id: uuidv4(),
      chat_room_id: chatRoomId,
      account_id: accountId,
      content: input.content || null,
      image: input.image || null,
    };

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Create Message Failed',
    };

    throw errors;
  }
}

async function validateUpdateMessage(messageData, newMessageData) {
  try {
    const data = {
      message_id: messageData.message_id,
      chat_room_id: messageData.chat_room_id,
      account_id: messageData.account_id,
      content: newMessageData.content || messageData.content,
      image: newMessageData.image || messageData.image,
    };

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Message Failed',
    };

    throw errors;
  }
}

module.exports = {
  validateMessageInfo,
  validateGetMessage,
  validateCreateMessage,
  validateUpdateMessage,
};
