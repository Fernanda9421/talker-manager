const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

const getTalkers = require('./middlewares/getTalkers');
const getTalkerById = require('./middlewares/getTalkerById');
const login = require('./middlewares/login');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const {
  validateToken, validateName, validateAge, validadeTalk, existTalkWatchedAt, existTalkRate,
} = require('./middlewares/authentication');
const createTalker = require('./middlewares/createTalker');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getTalkers);
app.get('/talker/:id', getTalkerById);
app.post('/login', validateEmail, validatePassword, login);
app.post(
  '/talker',
  validateToken, validateName, validateAge, existTalkWatchedAt, existTalkRate, validadeTalk,
  createTalker,
);

app.listen(PORT, () => {
  console.log('Online');
});
