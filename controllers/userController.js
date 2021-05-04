const StatusCodes = require('http-status-codes');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const user = require('../models/user');

function getUsers(req, res) {
  return User.find({})
    .then((users) => res.status(StatusCodes.OK).send(users))
    .catch((err) => res.status(StatusCodes.BAD_REQUEST).send(err));
}

function getOneUser(req, res) {
  return User.findById({ _id: req.params._id })
    .then((user) => res.status(StatusCodes.OK).send(user))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        res.status(StatusCodes.NOT_FOUND).send({ message: 'User ID not found.' });
      } else {
        res.status(StatusCodes.BAD_REQUEST).send(err);
      }
    });
}

function createUser(req, res) {
  const { name, about, avatar, email, password} = req.body;
  return User.countDocuments({})
    .then((bcrypt.hash(password, 10))
    .then((hash, _id) => User.create({
      name, about, avatar, email, password: hash, _id,
    }))
    .then((user) => res.status(StatusCodes.OK).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(StatusCodes.BAD_REQUEST).send({ message: 'User validation failed' });
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error' });
      }
    });
}

function updateUser(req, res) {
  if (req.params._id !== user._id) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: 'You are not authorized to delete this card' });

  } else {
    return User.findByIdAndUpdate(req.params._id, { name: req.body.name, about: req.body.about })
    .then((user) => res.status(StatusCodes.OK).send(user))
    .catch(res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error' }));
  }

}

function updateUserAvatar(req, res) {
  if (req.params._id !== user._id) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: 'You are not authorized to delete this card' });

  } else {
    return User.findByIdAndUpdate(req.params._id, { avatar: req.body.avatar })
    .then((user) => res.status(StatusCodes.OK).send(user))
    .catch(res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Internal server error' }));
  }

}

function login(req, res) {
  return User.findUserByCredentials({ email: req.body.email, password: req.body.password })

  .then((user) => {
    const token = jwt.sign({ _id: user._id }, { expiresIn: '7d' });
    res.cookie('token', token, { httpOnly: true });
    res.send({ token });
  })
  .catch((err) => {
    res.status(401).send({ message: err.message });
  });
}

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  updateUserAvatar,
  login,
};
