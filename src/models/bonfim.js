const Sequelize = require('sequelize');
const withInterval = require('sequelize-interval-postgres');
const uuid = require('uuid');
const getHours = require('date-fns/get_hours');
const db = require('../database');

// wrap DataTypes so we can use the Interval dataType
// Sequelize has yet to officially support Interval
// NOTE: watch https://github.com/sequelize/sequelize/pull/10441
function wrap(_, SequelizeDataTypes) {
  const DataTypes = withInterval(SequelizeDataTypes);
  const Bonfim = db.define('bonfim', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: uuid(),
      primaryKey: true,
    },
    eventDate: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'event_date',
    },
    bookingDate: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'booking_date',
    },
    duration: {
      type: DataTypes.INTERVAL,
      allowNull: false,
    },
    metadata: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    requestedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'requested_at',
      defaultValue: Sequelize.NOW,
    },
    modifiedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'modified_at',
      defaultValue: Sequelize.NOW,
    },
  }, {
    getterMethods: {
      eventStartHour() { return getHours(this.eventDate); },
      // FIXME: parse duration value and add hours to eventStartHour
      eventEndHour() { return this.eventStartHour + 0; },
    },
    timestamps: true,
    createdAt: 'requestedAt',
    updatedAt: 'modifiedAt',
  });
  return Bonfim;
}

module.exports = wrap;
