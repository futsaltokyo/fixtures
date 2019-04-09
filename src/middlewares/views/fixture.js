function makeView(req, res, next) {
  const { fixture } = req;
  return res.json({
    id: fixture.id,
    event: {
      day: fixture.eventDate,
      start: fixture.eventStartHour,
      end: fixture.eventEndHour,
    },
    status: fixture.status,
  });
}

module.exports = makeView;
