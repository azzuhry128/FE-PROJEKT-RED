const { v4: uuidv4 } = require('uuid');
const { check, validationResult } = require('express-validator');

async function validateNotificationInfo(req) {
  try {
    // await check('sender', 'Sender tidak boleh kosong').not().isEmpty()
    //   .run(req);

    await check('receiver', 'Receiver tidak boleh kosong').not().isEmpty()
      .run(req);

    await check('message', 'Pesan tidak boleh kosong').not().isEmpty()
      .run(req);

    const chatRoomValidations = validationResult(req);
    if (!chatRoomValidations.isEmpty()) {
      const error = new Error(chatRoomValidations.array()[0].msg);
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

async function validateGetNotification(notificationData) {
  try {
    if (!notificationData || notificationData.length < 1) {
      const error = new Error('Notification Not Found');
      error.code = 404;
      throw error;
    }

    const data = notificationData;

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Get Notification Failed',
    };

    throw errors;
  }
}

async function validateCreateNotification(accountId, input) {
  try {
    const data = {
      notification_id: uuidv4(),
      sender: accountId,
      receiver: input.receiver,
      message: input.message,
    };

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Create Notification Failed',
    };

    throw errors;
  }
}

async function validateUpdateNotification(notificationData, newNotificationData) {
  try {
    const data = {
      notification_id: notificationData.notification_id,
      sender: notificationData.sender,
      receiver: notificationData.receiver,
      message: newNotificationData.message || notificationData.message,
      is_read: newNotificationData.is_read || notificationData.is_read,
    };

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: error.code || 400,
      message: error.message || 'Validate Update Notification Failed',
    };

    throw errors;
  }
}

async function validateDeleteNotification(notificationData) {
  try {
    if (!notificationData) {
      const error = new Error('Notification Not Found');
      error.code = 404;
      throw error;
    }

    const data = notificationData;

    return data;
  } catch (error) {
    const errors = {
      success: false,
      code: 400,
      message: 'Validate Delete Notification Failed',
      errors: error,
    };

    throw errors;
  }
}

module.exports = {
  validateNotificationInfo,
  validateGetNotification,
  validateCreateNotification,
  validateUpdateNotification,
  validateDeleteNotification,
};
