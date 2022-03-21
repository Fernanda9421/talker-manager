const fsUtils = require('../fs-utils/fs-utils');

module.exports = async (_req, res) => {
  const talkers = await fsUtils.getTalkers();
  res.status(200).json(talkers);
};
