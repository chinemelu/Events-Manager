
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
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
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
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
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
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
