const config = require('../config');

function extract(header) {
  if (!header) {
    throw new InvalidCredentials();
  }
  const pattern = /^TOKEN\s+(.+)$/i;
  const matches = header.match(pattern);
  if (!matches) {
    throw new InvalidCredentials();
  }
  const token = matches[1];
  return token;
}

function authenticated(token) {
  return token === config.auth.secret;
}

async function authByToken(req, res, next) {
  const token = extract(req.headers.authorization);
  if (!authenticated(token)) {
    return res.sendStatus(401);
  }
  return next();
}

module.exports = authByToken;
