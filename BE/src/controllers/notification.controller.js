const {
  validateNotificationInfo,
  validateGetNotification,
  validateCreateNotification,
  validateUpdateNotification,
  validateDeleteNotification,
} = require('../validations/notification.validation');

const {
  getAllNotification,
  getNotificationByNotificationId,
  storeNotification,
  updateNotification,
  destroyNotification,
} = require('../services/notification.service');

exports.fetchAllNotification = async (req, res) => {
  try {
    const { accountId } = req;

    const notificationData = await getAllNotification('receiver', accountId);

    await validateGetNotification(notificationData);

    return res.json({
      success: true,
      code: 200,
      message: 'Notification Fetch Success',
      data: notificationData,
    });
  } catch (error) {
    return res.json(error);
  }
};

// exports.fetchNotificationByNotificationId = async (req, res) => {
//   try {
//     const { notificationId } = req.params;
//     const { accountId } = req;

//     const notificationData = await getNotificationByNotificationId(notificationId);

//     await validateGetNotification(notificationData, accountId);

//     return res.json({
//       success: true,
//       code: 200,
//       message: 'Notification Fetch Success',
//       data: notificationData,
//     });
//   } catch (error) {
//     return res.json(error);
//   }
// }

exports.createNotification = async (req, res) => {
  try {
    const { accountId } = req;
    const notificationInput = req.body;

    await validateNotificationInfo(notificationInput);

    const notificationData = await validateCreateNotification(accountId, notificationInput);

    await storeNotification(notificationData);

    return res.json({
      success: true,
      code: 200,
      message: 'Notification created',
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.editNotification = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const notificationInput = req.body;

    const notificationData = await getNotificationByNotificationId(notificationId);

    await validateNotificationInfo(notificationInput);

    const newNotificationData = await validateUpdateNotification(
      notificationData,
      notificationInput,
    );

    await updateNotification(notificationData, newNotificationData);

    return res.json({
      success: true,
      code: 200,
      message: 'Notification berhasil diubah',
      data: newNotificationData,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const { notificationId } = req.params;

    const notificationData = await getNotificationByNotificationId(notificationId);

    await validateDeleteNotification(notificationData);

    await destroyNotification(notificationData);

    return res.json({
      success: true,
      code: 200,
      message: 'Notification berhasil dihapus',
    });
  } catch (error) {
    return res.json(error);
  }
};
