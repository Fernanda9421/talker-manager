const fsUtils = require('../fs-utils/fs-utils');

module.exports = async (req, res) => {
  const { id } = req.params;

  const talkers = await fsUtils.getTalkers();
  const talkerIndex = talkers.findIndex((talker) => talker.id === parseInt(id, 10));
  talkers.splice(talkerIndex, 1);
  await fsUtils.addTalker(talkers);
  res.status(204).end();
};
