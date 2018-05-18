module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FacilityCenters', {
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
      facilityId: {
        allowNull: false,
        unique: false,
        type: Sequelize.UUID,
        references: {
          key: 'id',
          model: 'Facilities'
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
    return queryInterface.dropTable('FacilityCenters');
  }
};