const Sequelize = require('sequelize');
const withInterval = require('sequelize-interval-postgres');
const uuid = require('uuid');
const db = require('../database');

module.exports = function s(_, SequelizeDataTypes) {
  const DataTypes = withInterval(SequelizeDataTypes);

  const Fixture = db.define('fixtures', {
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
      defaultValue: Sequelize.NOW,
    },
    bookingDate: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'event_date',
      defaultValue: Sequelize.NOW,
    },
    duration: {
      // why not
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
      status() { return !!this.deletedAt; },
    },
    timestamps: true,
    createdAt: 'requestedAt',
    updatedAt: 'modifiedAt',
  });

  return Fixture;
};
