const subMonths = require('date-fns/sub_months');
const startOfDay = require('date-fns/start_of_day');

const scheduling = {
  bonfim: eventDate => startOfDay(subMonths(eventDate, 2)), // 00:00:00 2 months from now
};

function calculateBookingTime(eventDate, courtType) {
  const scheduler = scheduling[courtType];
  return scheduler ? scheduler(eventDate) : undefined;
}

module.exports = {
  calculateBookingTime,
};
