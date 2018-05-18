const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventSetUps', [{
      id: uuidv4(),
      name: 'Theatre',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Classroom',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Banquet',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Cocktail',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Exhibition',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Boardroom',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('EventSetUps', [{
      name: 'Theatre',
    },
    {
      name: 'Classroom',
    },
    {
      name: 'Banquet'
    },
    {
      name: 'Cocktail',
    },
    {
      name: 'Exhibition'
    },
    {
      name: 'Boardroom'
    },
    ]);
  }
};
