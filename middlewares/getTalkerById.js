const fsUtils = require('../fs-utils/fs-utils');

module.exports = async (req, res) => {
  const { id } = req.params;
  const talkers = await fsUtils.getTalkers();

  const findTalkerById = talkers.find((talker) => talker.id === parseInt(id, 10));

  if (!findTalkerById) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(findTalkerById);
};
