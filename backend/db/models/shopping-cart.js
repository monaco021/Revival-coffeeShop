'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shopping - Cart = sequelize.define('Shopping-Cart', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  Shopping - Cart.associate = function(models) {
    // associations can be defined here
  };
  return Shopping - Cart;
};