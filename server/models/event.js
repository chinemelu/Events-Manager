
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    id: {
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    numberofattendees: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    eventTypeId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      references: {
        key: 'id',
        model: 'EventSetUps'
      }
    },
    eventSetUpId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      references: {
        key: 'id',
        model: 'EventSetUps'
      }
    },
    additionalcomments: {
      type: DataTypes.TEXT,
    },
    centerId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    isPrivate: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    startdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    enddate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDv4,
      allowNull: false
    }
  });

  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Event.belongsTo(models.Center, {
      foreignKey: 'centerId'
    });
    Event.belongsTo(models.EventSetUp, {
      foreignKey: 'eventSetUpId',
    });
    Event.belongsTo(models.EventType, {
      foreignKey: 'eventTypeId'
    });
  };
  return Event;
};
