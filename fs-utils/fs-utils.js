const fs = require('fs').promises;

const getTalkers = () => (
  fs.readFile('./talker.json', 'utf8')
    .then((file) => JSON.parse(file))
);

module.exports = { getTalkers };
