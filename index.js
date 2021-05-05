const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routers/users');
const cardRouter = require('./routers/cards');
const { login, createUser } = require('./controllers/userController');
const auth = require('./middlewares/auth');
const NotFoundError = require('./middlewares/errors/NotFoundError');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/aroundb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.static(path.join(__dirname, 'public')));

app.post('/signin', login);

app.post('/signup', createUser);

app.use(auth);

app.use('/', userRouter);

app.use('/', cardRouter);

app.use((req, res) => {
  throw new NotFoundError('Requested resource not found');
});

app.use(errors())
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? 'An error occurred on the server' : message });
});

app.listen(PORT, () => {
  // console.log('Server is live!');
});
