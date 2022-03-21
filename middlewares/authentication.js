const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  if (authorization.length !== 16) return res.status(401).json({ message: 'Token inválido' });

  next();
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (typeof age !== 'number' || !age || age === '') {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (parseInt(age, 10) < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

const existTalkWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  if (!talk || talk.watchedAt === '' || !talk.watchedAt) {
    return res.status(400).json({ 
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  next();
};

const existTalkRate = (req, res, next) => {
  const { talk } = req.body;
  if (!talk || talk.rate === '' || !talk.rate) {
    return res.status(400).json({ 
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }

  next();
};

// Referência REGEX: https://www.guj.com.br/t/resolvido-como-validar-data-com-java-script/276656
const validadeTalk = (req, res, next) => {
  const { talk } = req.body;
  const validFormat = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

  if ((parseInt(talk.rate, 10) < 1) || (parseInt(talk.rate, 10) > 5)) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  if (!validFormat.test(talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

module.exports = {
  validateToken,
  validateName,
  validateAge,
  existTalkWatchedAt,
  existTalkRate,
  validadeTalk,
};
