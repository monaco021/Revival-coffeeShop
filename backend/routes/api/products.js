const express = require('express');
const router = express.Router();
const {Product} = require("../../db/models");
const { requireAuth } = require('../../utils/auth');
const asyncHandler = require("express-async-handler");



router.get("/", async(req, res) => {
    const coffee = await Product.findAll();
    return res.json(coffee);
});

router.get(
    "/:id",
    asyncHandler( async(req,res) => {
        const coffeePage = await Product.findByPk(req.params.id)
        return res.json(coffeePage);
    })
);



module.exports = router;
