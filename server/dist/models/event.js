
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    numberOfAttendees: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eventType: {
      type: DataTypes.STRING,
    },
    eventSetup: {
      type: DataTypes.STRING,
    },
    additionalComments: {
      type: DataTypes.TEXT,
    },
    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isPrivate: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    startDateTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    endDateTime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageurl: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.INTEGER
    }
  });

  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Event.belongsTo(models.Center, {
      foreignKey: 'centerId'
    });
  };
  return Event;
};