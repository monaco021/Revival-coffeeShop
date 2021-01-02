const express = require('express');
const router = express.Router();
const { ShoppingCart, Product, User } = require("../../db/models");
const { requireAuth } = require('../../utils/auth');
const asyncHandler = require("express-async-handler");



router.get(
    "/:id",
    requireAuth,
    asyncHandler(
    async(req, res) => {
        const userId = req.params.id;
        const cart = await ShoppingCart.findOne({
            where: { userId },
            include: { model: Product }
        });
        if (cart) {
            return res.json(cart);
        } else {
            return res.json({});
        }


}));

router.post(
    "/:productId",
    requireAuth,
    asyncHandler(async(req,res) => {
      const user = await User.findByPk( req.body.userId);
      console.log(user);
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
