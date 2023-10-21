const express = require('express');

const router = express.Router();
const {
  fetchAllUser, fetchUserByUserId, createUser, editUser, deleteUser,
} = require('../controllers/user.controller');

router.get('/', fetchAllUser);
router.get('/:userId', fetchUserByUserId);
router.post('/', createUser);
router.put('/:userId', editUser);
router.delete('/:userId', deleteUser);

module.exports = router;

//! SIAPAPUN YANG BERANI NGUSIK INI CODE, GUA BACOK LO!!!!!
