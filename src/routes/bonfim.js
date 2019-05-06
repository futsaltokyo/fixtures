// const auth = require('../middlewares/auth');
// const postResponse = require('../middlewares/postResponse');
// const { createFixture } = require('../services/fixtures');

async function newFixture(req, res) {
  return res.status(201).json({ id: 1 });

  // const {
  //   court: courtType,
  //   date,
  //   time,
  // } = req.body;
  // const { id } = await createFixture({ courtType, date, time });

  // res.status(201).json({ id });
  // return next();
}

module.exports = {
  post: [newFixture],
};
