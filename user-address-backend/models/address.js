module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    address: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});

  Address.associate = function(models) {
    Address.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  
  return Address;
};
