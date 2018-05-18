module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Events', 'startdate', {
      type: Sequelize.DATE,
      allowNull: false
    });
    queryInterface.changeColumn('Events', 'enddate', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Events', 'startdate', {
      type: Sequelize.DATE,
      allowNull: false
    });
    queryInterface.changeColumn('Events', 'enddate', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  }
};
