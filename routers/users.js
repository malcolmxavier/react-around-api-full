const express = require('express');

const router = express.Router();
const {
  getUsers, getOneUser, updateUser, updateUserAvatar,
} = require('../controllers/userController');

router.get('/users', getUsers);

router.get('/users/me', getOneUser);

router.get('/users/:id', getOneUser);

router.patch('/users/me', updateUser);

router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
