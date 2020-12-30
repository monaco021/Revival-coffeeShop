const express = require('express');
const router = express.Router();
const {Product} = require("../../db/models")



router.get("/", async(req, res) => {
    const coffee = await Product.findAll();
    console.log(coffee);
    return res.json(coffee);
});


module.exports = router;
