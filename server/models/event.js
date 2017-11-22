
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
    numberofattendees: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    },
    isPrivate: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    startdatetime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    enddatetime: {
      type: DataTypes.INTEGER,
      allowNull: false
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
