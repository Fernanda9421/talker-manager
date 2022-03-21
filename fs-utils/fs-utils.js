const fs = require('fs').promises;

const getTalkers = () => (
  fs.readFile('./talker.json', 'utf8')
    .then((file) => JSON.parse(file))
);

const addTalker = (newTalker) => (
  fs.writeFile('./talker.json', JSON.stringify(newTalker))
);

module.exports = { getTalkers, addTalker };
