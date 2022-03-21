const { Router } = require("express");
const Categories = require("../models").category;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.send(categories);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
