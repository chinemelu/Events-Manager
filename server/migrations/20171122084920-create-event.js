module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      numberofattendees: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      eventType: {
        type: Sequelize.STRING
      },
      eventSetup: {
        type: Sequelize.STRING
      },
      additionalcomments: {
        type: Sequelize.TEXT
      },
      imageurl: {
        type: Sequelize.STRING
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
      startdatetime: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      enddatetime: {
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
