const dotenv = require('dotenv');

dotenv.config();

const config = {
  db: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_WRITE_HOST,
    port: process.env.POSTGRES_WRITE_PORT,
    database: process.env.POSTGRES_DB,
    dialect: 'postgres',
  },
};

module.exports = config;
