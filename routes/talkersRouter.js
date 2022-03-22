const express = require('express');

const router = express.Router();

const getTalkers = require('../middlewares/getTalkers');
const getTalkerById = require('../middlewares/getTalkerById');
const searchTalker = require('../middlewares/searchTalker');
const {
  validateToken, validateName, validateAge, validateDate, existTalkWatchedAt, existTalkRate,
} = require('../middlewares/authentication');
const createTalker = require('../middlewares/createTalker');
const editTalker = require('../middlewares/editTalker');
const deleteTalker = require('../middlewares/deleteTalker');

router.get('/', getTalkers);
router.get('/search', validateToken, searchTalker);
router.get('/:id', getTalkerById);
router.post(
  '/',
  validateToken, validateName, validateAge, existTalkWatchedAt, existTalkRate, validateDate,
  createTalker,
);
router.put(
  '/:id',
  validateToken, validateName, validateAge, existTalkWatchedAt, existTalkRate, validateDate, 
  editTalker,
);
router.delete('/:id', validateToken, deleteTalker);

module.exports = router;
