module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      numberOfAttendees: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      eventType: {
        type: Sequelize.STRING
      },
      eventSetup: {
        type: Sequelize.STRING
      },
      additionalComments: {
        type: Sequelize.TEXT
      },
      centerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'id',
          model: 'Centers'
        }
      },
      isPrivate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      startDateTime: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      endDateTime: {
        type: Sequelize.INTEGER,
        allowNull: false

      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          key: 'id',
          model: 'Users'
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
    return queryInterface.dropTable('Events');
  }
};
