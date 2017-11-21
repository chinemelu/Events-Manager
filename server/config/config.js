
const dotenv = require('dotenv').config();

module.exports = {
  test: {
    username: 'postgres',
    password: null,
    database: 'events_manager_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    dialect: 'mysql'
  }
};

