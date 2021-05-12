const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../middlewares/errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Authorization Required');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token);
  } catch (err) {
    throw new UnauthorizedError('Authorization Required');
  }
  next();
};