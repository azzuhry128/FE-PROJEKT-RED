const express = require('express');

const router = express.Router();

const {
  fetchAllNotification,
  createNotification,
  editNotification,
  deleteNotification,
} = require('../controllers/notification.controller');

// Notification Main
router.get('/', fetchAllNotification);
router.post('/', createNotification);
router.put('/:notificationId', editNotification);
router.delete('/:notificationId', deleteNotification);
