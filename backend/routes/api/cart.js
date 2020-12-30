const express = require('express');
const router = express.Router();
const { ShoppingCart, Product } = require("../../db/models");
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
    "/add/:productId",
    requireAuth,
    asyncHandler(async(req,res) => {

}))


module.exports = router;
