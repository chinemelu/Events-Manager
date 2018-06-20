
const dotenv = require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_TEST_HOST,
    port: process.env.DB_PORT,
    dialectOptions: {
      useUTC: false, // -->Add this line. for reading from database
    },
    timezone: '+01:00', // -->Add this line. for writing to database
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
};

