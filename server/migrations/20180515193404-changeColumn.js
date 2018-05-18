module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn(
      'Events',
      'startdatetime', 'startdate'
    );
    queryInterface.renameColumn(
      'Events',
      'enddatetime', 'enddate'
    );
    queryInterface.renameColumn(
      'Events',
      'eventtype', 'eventTypeId'
    );
    queryInterface.renameColumn(
      'Events',
      'eventSetupId', 'eventSetUpId'
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.renameColumn(
      'Events',
      'startdate', 'startdatetime'
    );
    queryInterface.renameColumn(
      'Events',
      'enddate', 'enddatetime'
    );
    queryInterface.renameColumn(
      'Events',
      'eventTypeId', 'eventtype'
    );
    queryInterface.renameColumn(
      'Events',
      'eventSetUpId', 'eventSetupId'
    );
  }
};
