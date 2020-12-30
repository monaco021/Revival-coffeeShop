const express = require('express');
const router = express.Router();
const {Product} = require("../../db/models")



router.get("/", async(req, res) => {
    const cart = await ShoppingCart.findAll();
    console.log(cart);
    return res.json(cart);
});


module.exports = router;
