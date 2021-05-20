const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../middlewares/errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req.headers);

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Authorization Required');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;
  console.log('payload: ' + payload);

  try {
    payload = jwt.verify(token);
    console.log('payload: ' + payload);
  } catch (err) {
    throw new UnauthorizedError('Authorization Required');
  }
  next();
};