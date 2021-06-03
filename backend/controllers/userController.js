const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const BadRequestError = require('../middlewares/errors/BadRequestError');
const NotFoundError = require('../middlewares/errors/NotFoundError');
const ForbiddenError = require('../middlewares/errors/ForbiddenError');
const UnauthorizedError = require('../middlewares/errors/UnauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

function getUsers(req, res, next) {
  return User.find({})
    .then((users) => res.send(users))
    .catch(next);
}

function getOneUser(req, res, next) {
  return User.findById({ _id: req.user._id })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User ID not found');
      }
      res.send(user);
    })
    .catch(next);
}

function createUser(req, res, next) {
  const {
    name, about, avatar, email, password,
  } = req.body;
  if (!password || !email) {
    throw new BadRequestError('User validation failed');
  }
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => {
      if (!user) {
        throw new BadRequestError('User validation failed');
      } res.send(user);
    })
    .catch(next);
}

function updateUser(req, res, next) {
  return User.findByIdAndUpdate(req.user._id, { name: req.user.name, about: req.user.about })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User not found');
      } if (req.user._id !== user._id) {
        throw new ForbiddenError('You are not authorized to update this user');
      }
      res.send(user);
    })
    .catch(next);
}

function updateUserAvatar(req, res, next) {
  return User.findByIdAndUpdate(req.user._id, { avatar: req.user.avatar })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User not found');
      } if (req.user._id !== user._id) {
        throw new ForbiddenError('You are not authorized to update this avatar');
      }
      res.send(user);
    })
    .catch(next);
}

function login(req, res, next) {
  return User.findUserByCredentials({ email: req.body.email, password: req.body.password })
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Incorrect email or password');
      }
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : '91fa3639de7e0b378b04ae3207cca6c084e867d246f529e810764b449872e3ce', { expiresIn: '7d' });
      res.cookie('token', token, { httpOnly: true });
      res.send({ token });
    })
    .catch(next);
}

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  updateUserAvatar,
  login,
};
