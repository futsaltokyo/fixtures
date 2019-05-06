const config = require('../config');

function extract(header) {
  if (!header) {
    return undefined;
  }
  const pattern = /^TOKEN\s+(.+)$/i;
  const matches = header.match(pattern);
  if (!matches) {
    return undefined;
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
