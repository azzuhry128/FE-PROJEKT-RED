const express = require('express');

const router = express.Router();

const {
  fetchAllMessage,
  createMessage,
  editMessage,
  deleteMessage,
} = require('../controllers/message.controller');

// Message Main
router.get('/:chatRoomId', fetchAllMessage);
router.post('/:chatRoomId', createMessage);
router.put('/:messageId', editMessage);
router.delete('/:messageId', deleteMessage);

module.exports = router;
