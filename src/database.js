const Sequelize = require('sequelize');
const config = require('./config');


const database = new Sequelize(
  null, null, null,
  {
    dialect: 'postgres',
    logging: false,
    timezone: config.database.timezone,
    replication: {
      read: [
        {
          host: config.database.read.host,
          port: config.database.read.port,
          username: config.database.read.user,
          password: config.database.read.password,
          database: config.database.read.name,
        },
      ],
      write: {
        host: config.database.write.host,
        port: config.database.write.port,
        username: config.database.write.user,
        password: config.database.write.password,
        database: config.database.write.name,
      },
    },
    pool: config.database.pool,

    // default definitions for all models
    define: {
      // by default, we do not want Sequelize to auto create createdAt, modifiedAt fields
      timestamps: false,
      underscored: true,
    },
  },
);

module.exports = database;
