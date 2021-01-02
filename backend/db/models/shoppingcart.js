'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingCart = sequelize.define('ShoppingCart', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    brand: {

      type: DataTypes.STRING(100)
    },
    name: {

      type: DataTypes.STRING(100)
    },
    image: {

      type: DataTypes.TEXT
    },
    price: {

      type: DataTypes.INTEGER
    },
  }, {});
  ShoppingCart.associate = function(models) {
    ShoppingCart.belongsTo(models.User, { foreignKey: "userId" });
    ShoppingCart.belongsToMany(models.Product, {foreignKey: "shoppingCartId", otherKey:"productId", through: models.ProductCart });
  };
  return ShoppingCart;
};
