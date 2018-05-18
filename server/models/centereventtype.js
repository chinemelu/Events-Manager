module.exports = (sequelize, DataTypes) => {
  const CenterEventType = sequelize.define('CenterEventType', {
    centerId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    eventTypeId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CenterEventType;
};
