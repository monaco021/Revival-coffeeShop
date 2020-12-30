'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  ShoppingCart.associate = function(models) {
    ShoppingCart.belongsTo(models.User, { foreignKey: "userId" });
    ShoppingCart.belongsToMany(models.Product, {foreignKey: "productId", through: models.ProductCart });
  };
  return ShoppingCart;
};
