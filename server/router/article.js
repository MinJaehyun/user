const express = require('express');
const router = express.Router();
const model = require("../mongoose/model");

// POST, /create
router.post("/create", async (req, res) => {
  const { title, content } = req.body;
  const article = await model.Article({
    title,
    content,
  }).save();
  console.log('article: ', article);
  res.send(article);
});

// GET, /read
router.get("/read", async (req, res) => {
  const { title, content } = req.body;
  const article = await model.Article.find({});
  res.send(article);
});

// GET, /detail/:id 
router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const article = await model.Article.findById(id);
  res.send(article);
});

// PATCH, /update
router.patch("/update", async (req, res) => {
  const { id, title, content } = req.body;
  const article = await model.Article.findByIdAndUpdate(
    id,
    { title, content },
    { new: true },
  );
  res.send(article);
});

// DELETE, /delete/:id
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const article = await model.Article.findByIdAndDelete(id)
  res.send(article);
});

module.exports = router;