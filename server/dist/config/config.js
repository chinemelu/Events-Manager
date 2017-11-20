'use strict';

var dotenv = require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  },
  test: {
    username: 'root',
    password: 'password',
    database: 'events-manager-test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    dialect: 'mysql'
  }
};