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
    requireAuth,
    asyncHandler( async(req,res) => {
        const coffeePage = await Product.findByPk(req.params.id)
        return res.json(coffeePage);
    })
);

// const book = await db.Book.findByPk(req.params.id, {
//     include: { model: db.Review, include: db.User },
//   });
//   const reviews = book.Reviews;
//   res.render("book", { book, reviews, token: req.csrfToken() });


module.exports = router;
