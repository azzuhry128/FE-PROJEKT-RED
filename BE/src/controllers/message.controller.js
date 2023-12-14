//! SIAPAPUN YANG BERANI NGUSIK INI CONTROLLER, GUA BACOK LO!!!!!

const {
  validateMessageInfo,
  validateGetMessage,
  validateCreateMessage,
  validateEditMessage,
} = require('../validations/message.validation');

const {
  getAllMessage,
  getMessageByMessageId,
  storeMessage,
  updateMessage,
  destroyMessage,
} = require('../services/message.service');

exports.fetchAllMessage = async (req, res) => {
  try {
    const { chatRoomId } = req.params;

    const messageData = await getAllMessage('chat_room_id', chatRoomId);
    const fetchMessage = await validateGetMessage(messageData);

    return res.json({
      success: true,
      code: 200,
      message: 'Pesan dimuat',
      data: fetchMessage,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.createMessage = async (req, res) => {
  try {
    const { accountId } = req;
    const { chatRoomId } = req.params;
    const messageInput = req.body;

    await validateMessageInfo(messageInput);

    const messageData = await validateCreateMessage(chatRoomId, accountId, messageInput);

    await storeMessage(messageData);

    return res.json({
      success: true,
      code: 200,
      message: 'Pesan telah terkirim',
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.editMessage = async (req, res) => {
  try {
    const { messageId } = req.params;
    const messageInput = req.body;

    const messageData = await getMessageByMessageId(messageId);

    await validateMessageInfo(messageInput);

    const newMessageData = await validateEditMessage(messageData, messageInput);

    await updateMessage(messageData, newMessageData);

    return res.json({
      success: true,
      code: 200,
      message: 'Pesan berhasil diubah',
      data: newMessageData,
    });
  } catch (error) {
    return res.json(error);
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params;

    const messageData = await getMessageByMessageId(messageId);

    await validateGetMessage(messageData);

    await destroyMessage(messageData);

    return res.json({
      success: true,
      code: 200,
      message: 'Pesan telah dihapus',
    });
  } catch (error) {
    return res.json(error);
  }
};
