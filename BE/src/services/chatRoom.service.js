const { ChatRoom } = require('../models');

async function getAllChatRoom(query, value) {
  try {
    const chatRoomData = await ChatRoom.findAll({
      where: {
        [query]: value,
      },
    });

    return chatRoomData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch chat room data',
      errors: error,
    };

    throw errors;
  }
}

async function getChatRoom(query, value) {
  try {
    const chatRoomData = await ChatRoom.findOne({
      where: {
        [query]: value,
      },
    });

    return chatRoomData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch chat room data',
      errors: error,
    };

    throw errors;
  }
}

async function storeChatRoom(chatRoomData) {
  try {
    await ChatRoom.create(chatRoomData);

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to store chat room data',
      errors: error,
    };

    throw errors;
  }
}

async function updateChatRoom(chatRoomData, updatedChatRoomData) {
  try {
    await chatRoomData.update(updatedChatRoomData);

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to update chat room data',
      errors: error,
    };

    throw errors;
  }
}

async function destroyChatRoom(chatRoomData) {
  try {
    await chatRoomData.destroy();

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to delete chat room data',
      errors: error,
    };

    throw errors;
  }
}

module.exports = {
  getAllChatRoom,
  getChatRoom,
  storeChatRoom,
  updateChatRoom,
  destroyChatRoom,
};
