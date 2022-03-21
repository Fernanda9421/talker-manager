const fsUtils = require('../fs-utils/fs-utils');

module.exports = async (req, res) => {
  const { body } = req;
  const talkers = await fsUtils.getTalkers();

  const newTalker = {
    ...body,
    id: talkers.length + 1,
  };
  const allTalkers = [...talkers, newTalker];
  await fsUtils.addTalker(allTalkers);

  res.status(201).json(newTalker);
};
