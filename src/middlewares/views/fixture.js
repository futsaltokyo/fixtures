function makeView(req, res) {
  const { fixture } = req;
  return res.json({
    id: fixture.id,
    court: fixture.court,
    event: {
      day: fixture.eventDate,
      start: fixture.eventStartHour,
      end: fixture.eventEndHour,
    },
    booking: {
      scheduledAt: fixture.bookingDate,
    },
  });
}

module.exports = makeView;
