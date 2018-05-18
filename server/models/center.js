module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageurl: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    }
  });

  Center.associate = (models) => {
    Center.belongsTo(models.User, {
      foreignKey: 'userId',
    });
    Center.hasMany(models.Event, {
      foreignKey: 'centerId',
    });
    Center.belongsToMany(models.EventType, {
      through: 'CenterEventType',
      foreignKey: 'centerId',
    });
    Center.belongsToMany(models.Facility, {
      through: {
        model: 'FacilityCenter',
        unique: false
      },
      foreignKey: 'centerId',
      onDelete: 'cascade'
    });
    Center.belongsToMany(models.EventSetUp, {
      through: {
        model: 'EventSetUpCenter',
        unique: false
      },
      foreignKey: 'centerId',
      onDelete: 'cascade'
    });
  };
  return Center;
};
