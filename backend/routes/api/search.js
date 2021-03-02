const express = require('express');
const router = express.Router();
const {Product} = require("../../db/models");
const { requireAuth } = require('../../utils/auth');
const asyncHandler = require("express-async-handler");



router.get("/:item", async(req, res) => {
    const item = req.params.item
    const coffee = await Product.findAll({
        where: {
            Product: {
                name: item
            }
        }
    });
    return res.json(coffee);
});