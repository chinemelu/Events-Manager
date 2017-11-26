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
    suitablefor: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    facilities: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageurl: {
      type: DataTypes.STRING
    },
    availability: {
      type: DataTypes.ENUM,
      values: ['available', 'not available'],
      allowNull: false,
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
      foreignKey: 'centerId'
    });
  };
  return Center;
};
