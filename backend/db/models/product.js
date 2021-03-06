'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roast: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {});
  Product.associate = function(models) {
    Product.belongsToMany(models.ShoppingCart, {foreignKey: "productId", otherKey: "shoppingCartId", through: models.ProductCart});
    Product.hasMany(models.Review, {foreignKey: "productId"});
  };
  return Product;
};
