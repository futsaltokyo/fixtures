const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  port: process.env.PORT || 4000,
  openAPI: {
    doc: process.env.OPENAPI_DOC_FILEPATH,
    routes: path.resolve(__dirname, 'routes'),
  },
  // using PostgreSQL
  database: {
    write: {
      host: process.env.POSTGRES_WRITE_HOST,
      port: process.env.POSTGRES_WRITE_PORT,
      name: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    read: {
      host: process.env.POSTGRES_READ_HOST,
      port: process.env.POSTGRES_READ_PORT,
      name: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    // TODO: update requirements based on estimates
    pool: {
      min: 0,
      max: 5,
      idle: 10000,
      acquire: 30000,
      evict: 10000,
    },
  },
};

module.exports = config;