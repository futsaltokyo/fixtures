module.exports = {
  up: queryInterface => queryInterface.sequelize.query(`
-- for uuid generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE fixtures (
  id UUID PRIMARY KEY,
  event_date TIMESTAMPTZ NOT NULL,
  booking_date TIMESTAMPTZ NOT NULL,
  duration INTERVAL NOT NULL,
  metadata JSON,
  requested_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() at time zone 'Asia/Tokyo'),
  modified_at TIMESTAMPTZ NOT NULL DEFAULT (NOW() at time zone 'Asia/Tokyo')
);

CREATE TABLE bonfim (
  indoor BOOLEAN NOT NULL DEFAULT FALSE
) INHERITS (fixtures);

-- INDEXES
-- none so far yet until we require listing capabilities
  `),

  down: queryInterface => queryInterface.sequelize.query(`
  DROP TABLE bonfim;
  DROP TABLE fixtures;
  `),
};
