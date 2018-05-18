module.exports = (sequelize, DataTypes) => {
  const EventType = sequelize.define('EventType', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  EventType.associate = (models) => {
    EventType.belongsToMany(models.Center, {
      through: 'CenterEventType',
      unique: false,
      foreignKey: 'eventTypeId',
      onDelete: 'CASCADE'
    });
    EventType.hasMany(models.Event, {
      foreignKey: 'eventTypeId',
    });
  };
  return EventType;
};
