const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const BadRequestError = require('../middlewares/errors/BadRequestError');
const NotFoundError = require('../middlewares/errors/NotFoundError');
const ForbiddenError = require('../middlewares/errors/ForbiddenError');
const UnauthorizedError = require('../middlewares/errors/UnauthorizedError');

function getUsers(req, res, next) {
  return User.find({})
    .then((users) => res.send(users))
    .catch(next);
}

function getOneUser(req, res, next) {
  return User.findById({ _id: req.params._id })
  .then((user) => {
    if (!user) {
      throw new NotFoundError('User ID not found');
    }
    res.send(user);
  })
  .catch(next);
};

function createUser(req, res, next) {
  const { email, password, name, about, avatar } = req.body;
  // console.log (req.body);
  if (!password || !email) {
    console.log(email, password);
    throw new BadRequestError('User validation failed');
  }
  return User.countDocuments({})
    .then(bcrypt.hash(password, 10))
    .then((hash, _id) => User.create({
      name, about, avatar, email, password: hash, _id,
    }))
    .then((user) => {
      if (!user) {
        throw new BadRequestError('User validation failed');
      } res.send(user);
    })
    .catch(next);
};

function updateUser(req, res, next) {
  return User.findByIdAndUpdate(req.params._id, { name: req.body.name, about: req.body.about })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User not found');
      } if (req.params._id !== user._id) {
        throw new ForbiddenError('You are not authorized to update this user');
      }
      res.send(user);
    })
    .catch(next);
};

function updateUserAvatar(req, res, next) {
  return User.findByIdAndUpdate(req.params._id, { avatar: req.body.avatar })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User not found');
      } if (req.params._id !== user._id) {
        throw new ForbiddenError('You are not authorized to update this avatar');
      }
      res.send(user);
    })
    .catch(next);
};

function login(req, res, next) {
  return User.findUserByCredentials({ email: req.body.email, password: req.body.password })
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Incorrect email or password');
      }
      const token = jwt.sign({ _id: user._id }, { expiresIn: '7d' });
      res.cookie('token', token, { httpOnly: true });
      res.send({ token });
    })
    .catch(next);
};

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  updateUserAvatar,
  login,
};
