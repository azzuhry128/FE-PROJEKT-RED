require('../../config/database.json');
const { Message } = require('../models');

async function getAllMessage(query = 'chat_room_id', value = '') {
  try {
    const messageData = await Message.findAll({
      where: {
        [query]: value,
      },
      include: [
        'chatRoom',
        {
          association: 'account',
          include: ['user'],
        },
      ],
      order: [
        ['createdAt', 'ASC'],
      ],
    });

    return messageData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch message data',
      errors: error,
    };

    throw errors;
  }
}

async function getMessageByMessageId(messageId) {
  try {
    const messageData = await Message.findOne({
      where: {
        message_id: messageId,
      },
      include: [
        'chatRoom',
        {
          association: 'account',
          include: ['user'],
        },
      ],
      order: ['updatedAt', 'ASC'],
    });

    return messageData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch message data',
      errors: error,
    };

    throw errors;
  }
}

async function storeMessage(messageData) {
  try {
    await Message.create(messageData);

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to store message data',
      errors: error,
    };

    throw errors;
  }
}

async function updateMessage(messageData, updatedMessageData) {
  try {
    await messageData.update(updatedMessageData);

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to update message data',
      errors: error,
    };

    throw errors;
  }
}

async function destroyMessage(messageData) {
  try {
    await messageData.destroy();

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to destroy message data',
      errors: error,
    };

    throw errors;
  }
}

module.exports = {
  getAllMessage,
  getMessageByMessageId,
  storeMessage,
  updateMessage,
  destroyMessage,
};
