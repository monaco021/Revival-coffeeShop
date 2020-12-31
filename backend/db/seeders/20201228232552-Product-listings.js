'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
      name: 'Pike Place -100% Arabica',
      brandName: "Starbucks",
      roast: "Medium",
      price: 9.98,
      imageLink: "https://www.kroger.com/product/images/xlarge/front/0076211177858",
      description: "Pike Place Roast is well-rounded with subtle notes of cocoa and toasted nuts balancing the smooth mouthfeel",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name: "S'morey Time Ground Coffee Beans",
      brandName: "Bones Coffee Company",
      roast: "Medium",
      price: 17.99,
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cFa5ULayw5VK-5PacBNCAq998PMZ9P0OYQ&usqp=CAU",
      description: "Perfect Campfire Flavor: Our S'morey Time captures the taste of smores roasted over a campfire; low acid coffee made from medium roast Arabica beans infused with chocolate and toasted marshmallow flavor with a hint of sweet graham cracker",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name: 'High Caffeine',
      brandName: "Guru Coffee Company",
      roast: "Medium",
      price: 18.99,
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeRS6cYhH2gPK2tIhotcH-ATZ2nEs7D-lmA&usqp=CAU",
      description: " Taste the difference of high-quality specialty coffee ground with our smooth-tasting, low acid, high caffeine medium roast blend, hand crafted with specially selected beans to give you a delicious caffeine boost that will help you take on the day",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name: 'Arabica Coffee 8.8 oz',
      brandName: "Mount Hagen",
      roast: "Dark",
      price: 13.49,
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbE6Kao5ooee7Ib5ahHec9_nbdfoNFdk_mbA&usqp=CAU",
      description: "100% ARABICA: Master blend hand-picked from the highlands of Papua New Guinea, Peru and Honduras",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name: "Henry's Blend",
      brandName: "Seattle's Best Coffee",
      roast: "Dark",
      price: 4.49,
      imageLink: "https://www.kroger.com/product/images/xlarge/front/0076211177858",
      description: "Our Henry's Blend is a dark roasted coffee with complex and robust flavor and a well-rounded finish",
      createdAt: new Date(),
      updatedAt: new Date(),
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
