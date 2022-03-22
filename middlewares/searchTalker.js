const fsUtils = require('../fs-utils/fs-utils');

module.exports = async (req, res) => {
  const { q } = req.query;
  const talkers = await fsUtils.getTalkers();
  const filteredTalkers = talkers.filter((talker) => talker.name.includes(q));

  res.status(200).json(filteredTalkers);
};
