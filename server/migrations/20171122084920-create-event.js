module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
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
      eventtype: {
        type: Sequelize.STRING
      },
      eventsetup: {
        type: Sequelize.STRING
      },
      additionalcomments: {
        type: Sequelize.TEXT
      },
      imageurl: {
        type: Sequelize.STRING
      },
      centerId: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
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
        type: Sequelize.DATE,
        allowNull: false
      },
      enddatetime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
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
