const { Notification } = require('../models');

async function getAllNotification(query = 'receiver', value = '') {
  try {
    const notificationData = await Notification.findAll({
      where: {
        [query]: value,
      },
      include: [
        'notification_chat_room',
        {
          association: 'notification_sender',
          include: ['user'],
        },
        {
          association: 'notification_receiver',
          include: ['user'],
        },
      ],
      order: [
        ['updatedAt', 'DESC'],
      ],
    });

    return notificationData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch notification data',
      errors: error,
    };

    throw errors;
  }
}

async function getNotificationByNotificationId(notificationId) {
  try {
    const notificationData = await Notification.findOne({
      where: {
        notification_id: notificationId,
      },
      include: [
        {
          association: 'sender',
          include: ['user'],
        },
        {
          association: 'receiver',
          include: ['user'],
        },
      ],
    });

    return notificationData;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to fetch notification data',
      errors: error,
    };

    throw errors;
  }
}

async function storeNotification(notificationData) {
  try {
    await Notification.create(notificationData);

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to store notification data',
      errors: error,
    };

    throw errors;
  }
}

async function updateNotification(notificationData, updatedotificationData) {
  try {
    await notificationData.update(updatedotificationData);

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to update notification data',
      errors: error,
    };

    throw errors;
  }
}

async function destroyNotification(notificationData) {
  try {
    await notificationData.destroy();

    return null;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Failed to destroy notification data',
      errors: error,
    };

    throw errors;
  }
}

module.exports = {
  getAllNotification,
  getNotificationByNotificationId,
  storeNotification,
  updateNotification,
  destroyNotification,
};
