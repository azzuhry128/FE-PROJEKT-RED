const { Op } = require('sequelize');
const { UserChat } = require('../models');

async function getAllUserChat(query = 'chat_id', value = '') {
  try {
    const userChatData = await UserChat.findAll({
      where: {
        [query]: value,
      },
      include: [
        {
          association: 'account',
          include: ['user'],
        },
        'chatRoom',
      ],
      order: [
        ['updatedAt', 'DESC'],
      ],
    });

    return userChatData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch user chat data',
      errors: error,
    };

    throw errors;
  }
}

async function getUserChat(chatRoomId, accountId) {
  try {
    const userChatData = await UserChat.findOne({
      where: {
        [Op.and]: {
          account_id: accountId,
          chat_room_id: chatRoomId,
        },
      },
      include: [
        {
          association: 'account',
          include: ['user'],
        },
        'chatRoom',
      ],
    });

    return userChatData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch user chat data',
      errors: error,
    };

    throw errors;
  }
}

async function storeUserChat(userChatData) {
  try {
    await UserChat.create(userChatData);

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to store user chat data',
      errors: error,
    };

    throw errors;
  }
}

// async function updateUserChat(userChatData, updatedUserChatData) {
//   try {
//     await userChatData.update(updatedUserChatData);

//     return null;
//   } catch (error) {
//     const errors = {
//       success: false,
//       code: 400,
//       message: 'Failed to update user chat data',
//       errors: error,
//     };

//     throw errors;
//   }
// }

async function destroyUserChat(userChatData) {
  try {
    await userChatData.destroy();

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to delete user chat data',
      errors: error,
    };

    throw errors;
  }
}

// async function destroyUserChatByAccountIdAndChatRoomId(accountId, chatRoomId) {
//   try {
//     await UserChat.destroy({
//       where: {
//         [Op.and]: {
//           account_id: accountId,
//           chat_room_id: chatRoomId,
//         },
//       },
//     });

//     return null;
//   } catch (error) {
//     const errors = {
//       success: false,
//       code: 400,
//       message: 'Failed to delete user chat data',
//       errors: error,
//     };

//     throw errors;
//   }
// }

module.exports = {
  getAllUserChat,
  getUserChat,
  storeUserChat,
  destroyUserChat,
  // destroyUserChatByAccountIdAndChatRoomId,
};
