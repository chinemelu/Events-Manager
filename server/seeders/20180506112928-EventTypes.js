const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventTypes', [{
      id: uuidv4(),
      name: 'Christmas party',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Cocktail function',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Conference or meeting',
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
      name: 'Gala dinner',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'School ball',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: uuidv4(),      
      name: 'Wedding',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('EventTypes', [{
      name: 'Christmas party',
    },
    {
      name: 'Cocktail function',
    },
    {
      name: 'Conference or meeting'
    },
    {
      name: 'Exhibition',
    },
    {
      name: 'Gala dinner'
    },
    {
      name: 'School ball'
    },
    {
      name: 'Wedding'
    },
    ]);
  }
};
