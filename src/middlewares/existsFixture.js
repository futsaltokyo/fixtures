const { getFixture } = require('../services/fixtures');

async function existsFixture(req, res, next) {
  const { id } = req.params;
  console.log(id);
  const fixture = await getFixture(id);
  if (!fixture) {
    return res.sendStatus(404);
  }

  req.fixture = fixture;
  return next;
}

module.exports = existsFixture;
