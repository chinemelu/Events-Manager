module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Events',
      'starttime',
      {
        type: Sequelize.TIME,
        allowNull: false
      }
    );
    queryInterface.addColumn(
      'Events',
      'endtime', {
        type: Sequelize.TIME,
        allowNull: false
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Events',
      'starttime'
    );
    queryInterface.removeColumn(
      'Events',
      'endtime'
    );
  }
};
