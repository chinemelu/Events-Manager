module.exports = (sequelize, DataTypes) => {
  const EventSetUpCenter = sequelize.define('EventSetUpCenter', {
    centerId: {
      allowNull: false,      
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: false,
    },
    eventSetUpId: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return EventSetUpCenter;
};
