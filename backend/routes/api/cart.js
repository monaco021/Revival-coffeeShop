const express = require('express');
const router = express.Router();
const { ShoppingCart, Product, User } = require("../../db/models");
const { requireAuth } = require('../../utils/auth');
const asyncHandler = require("express-async-handler");



router.get(
    "/",
    requireAuth,
    asyncHandler(
    async(req, res) => {
        const user = req.user
        const cartItems = await ShoppingCart.findAll({
            where: { userId: user.id },
            include: { model: Product }
        });
        if (cartItems) {
            return res.json(cartItems);
        } else {
            return res.json({});
        }


}));

router.post(
    "/:productId",
    requireAuth,
    asyncHandler(async(req,res) => {
      const user = await User.findByPk( req.body.userId);
      const product = await Product.findByPk(req.params.productId);
      const cartItem = await ShoppingCart.create(
          {
              userId: user.dataValues.id,
              brand: product.brandName,
              name: product.name,
              image: product.imageLink,
              price: product.price
          })
          res.json(cartItem)

}))


module.exports = router;
