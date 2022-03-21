const fsUtils = require('../fs-utils/fs-utils');

let lastId = 4;

function newTalker(id, name, age, talk) {
  return [
    {
      id,
      name,
      age,
      talk,
    },
  ];
}

module.exports = async (req, res) => {
  const { name, age, talk } = req.body;
  const talkers = await fsUtils.getTalkers();
  lastId += 1;
  await fsUtils.addTalker(newTalker(lastId, name, age, talk));
  talkers.push({ lastId, name, age, talk });

  res.status(201).json({
    id: lastId,
    name,
    age,
    talk: {
      watchedAt: talk.watchedAt,
      rate: talk.rate,
    },
  });
};
