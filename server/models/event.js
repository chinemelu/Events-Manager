
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
    eventtype: {
      type: DataTypes.STRING,
    },
    eventsetup: {
      type: DataTypes.STRING,
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
    startdatetime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfter: DataTypes.NOW
      }
    },
    enddatetime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isAfter: DataTypes.NOW
      }
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
      onDelete: 'CASCADE'
    });
    Event.belongsTo(models.Center, {
      foreignKey: 'centerId'
    });
  };
  return Event;
};
