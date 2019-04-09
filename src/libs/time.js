const scheduling: {
  // QUESTION: perhaps this should be moved to time lib
  bonfim: eventDate => startOfDay(subMonths(eventDate, 2)), // 00:00:00 2 months from now
},

function calculateBookingTime(eventDate, courtType) {
  const scheduler = scheduling[courtType];
  return scheduler ? scheduler(eventDate) : undefined;
}

module.exports = {
  calculateBookingTime,
};
