const randomToken = require('../token-utils/randomToken');

module.exports = (_req, res) => {
  const token = randomToken(16);
  return res.status(200).json({ token });
};
