module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventSetUpCenters', {
      centerId: {
        allowNull: false,
        unique: false,
        type: Sequelize.UUID,
        references: {
          key: 'id',
          model: 'Centers'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      eventSetUpId: {
        allowNull: false,
        unique: false,
        type: Sequelize.UUID,
        references: {
          key: 'id',
          model: 'EventSetUps'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    return queryInterface.dropTable('EventSetUpCenters');
  }
};