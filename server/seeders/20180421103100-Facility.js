const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Facilities', [{
      id: uuidv4(),
      name: 'Generator',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      name: 'Toilet',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Air Conditioning',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Indoor Changing Room',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Security',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Parking spaces',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Projector',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Sound system',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Catering services',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),      
      name: 'Musical instruments',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Facilities', [{
      name: 'Generator',
    },
    {
      name: 'Toilet',
    },
    {
      name: 'Air Conditioning'
    },
    {
      name: 'Indoor Changing Rooms',
    },
    {
      name: 'Security'
    },
    {
      name: 'Parking spaces'
    },
    {
      name: 'Projector'
    },
    {
      name: 'Sound system'
    },
    {
      name: 'Catering services'
    },
    {
      name: 'Musical instruments'
    },
    ]);
  }
};
