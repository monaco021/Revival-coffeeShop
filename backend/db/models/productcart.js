'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCart = sequelize.define('ProductCart', {
    productId: DataTypes.INTEGER,
    shoppingCartId: DataTypes.INTEGER
  }, {});
  ProductCart.associate = function(models) {
    // associations can be defined here
  };
  return ProductCart;
};