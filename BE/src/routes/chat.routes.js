const express = require('express');

const router = express.Router();

const {
  fetchAllChat,
  addFriendChat,
  acceptFriendChat,
  createGroupChat,
  updateGroupChat,
  deleteGroupChat,
  joinGroupChat,
  leaveGroupChat,
} = require('../controllers/chat.controller');

// Chat Main
router.get('/', fetchAllChat);

// Single Chat
router.post('/single', addFriendChat);
router.post('/single/:chatRoomId/accept', acceptFriendChat);

// Group Chat
router.post('/groups', createGroupChat);
router.put('/groups/:groupChatId', updateGroupChat);
router.delete('/groups/:groupChatId', deleteGroupChat);

// Join & Leave Group Chat
router.post('/groups/:groupChatId/join', joinGroupChat);
router.delete('/groups/:groupChatId/leave', leaveGroupChat);

module.exports = router;
