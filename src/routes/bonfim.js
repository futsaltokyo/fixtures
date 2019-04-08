module.exports = {
  // GET /v1/user/:userId
  get: [existsFixture, getFixture],
  // DELETE /v1/user/:userId
  delete: [existsFixture, getFixture],
};