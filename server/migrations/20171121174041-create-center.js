module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Centers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      suitablefor: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      facilities: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imageurl: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('Centers');
  }
};
