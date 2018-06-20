module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Events', 'startdate', {
      type: Sequelize.DATEONLY,
    });
    queryInterface.changeColumn('Events', 'enddate', {
      type: Sequelize.DATEONLY,
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('Events', 'startdate', {
      type: Sequelize.DATE,
      timestamps: true
    });
    queryInterface.changeColumn('Events', 'enddate', {
      type: Sequelize.DATE,
      timestamps: true
    });
  }
};
