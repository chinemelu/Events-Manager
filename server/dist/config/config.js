'use strict';

const dotenv = require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    username: 'postgres',
    password: null,
    database: 'events_manager_test',
    host: '127.0.0.1'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    dialect: 'mysql'
  }
};
