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
  res.status(404).send({ message: 'Requested Resource not found' });
});

app.listen(PORT, () => {
  // console.log('Server is live!');
});
