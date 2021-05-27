const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../middlewares/errors/UnauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Authorization Required');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : '91fa3639de7e0b378b04ae3207cca6c084e867d246f529e810764b449872e3ce');
  } catch (err) {
    throw new UnauthorizedError('Authorization Required');
  }

  req.user = payload;

  next();
};
