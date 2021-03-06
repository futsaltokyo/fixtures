const auth = require('../../middlewares/auth');
const existsFixture = require('../../middlewares/existsFixture');
const fixtureView = require('../../middlewares/views/fixture');
const { deleteFixture } = require('../../services/fixtures');

async function deleteFixtureById(req, res) {
  const { fixture } = req;
  await deleteFixture(fixture);
  return res.sendStatus(204);
}

module.exports = {
  get: [auth, existsFixture, fixtureView],
  delete: [auth, existsFixture, deleteFixtureById],
};
