module.exports = (sequelize, DataTypes) => {
  const EventSetUp = sequelize.define('EventSetUp', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  });
  EventSetUp.associate = (models) => {
    EventSetUp.belongsToMany(models.Center, {
      through: {
        model: 'EventSetUpCenter',
        unique: false
      },
      foreignKey: 'eventSetUpId',
      onDelete: 'cascade'
    });
    EventSetUp.hasMany(models.Event, {
      foreignKey: 'eventSetUpId',
    });
  };
  return EventSetUp;
};

