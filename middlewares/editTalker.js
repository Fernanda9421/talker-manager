const fsUtils = require('../fs-utils/fs-utils');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkers = await fsUtils.getTalkers();

  const talkerIndex = talkers.findIndex((talker) => talker.id === parseInt(id, 10));
  const editedTalker = { ...talkers[talkerIndex], name, age, talk };
  talkers[talkerIndex] = editedTalker;

  await fsUtils.addTalker(talkers);
  res.status(200).json(editedTalker);
};
