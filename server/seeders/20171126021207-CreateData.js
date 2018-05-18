const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      username: 'tony',
      email: 'tonyboy@mail.com',
      role: 'superadmin',
      password: '$2a$10$1CT/Qv11aUwPHV6u4ZgequKkEcKMIDTJ.6xnleILH3YUblpZ2itHe',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [
    ], {});
  },
};
