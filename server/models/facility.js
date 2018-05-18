module.exports = (sequelize, DataTypes) => {
  const Facility = sequelize.define('Facility', {
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

  Facility.associate = (models) => {
    Facility.belongsToMany(models.Center, {
      through: {
        model: 'FacilityCenter',
        unique: false
      },
      foreignKey: 'facilityId',
      onDelete: 'cascade',

    });
  };
  return Facility;
};
