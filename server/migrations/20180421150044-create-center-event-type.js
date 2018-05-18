module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CenterEventTypes', {
      centerId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          key: 'id',
          model: 'Centers'
        }
      },
      eventTypeId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          key: 'id',
          model: 'EventTypes'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CenterEventTypes');
  }
};