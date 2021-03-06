const { Router } = require("express");
const Categories = require("../models").category;
const Products = require("../models").product;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Categories.findAll();
    res.send(categories);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categoriesById = req.params.id;
    const categoryById = await Products.findAll({
      include: [
        { model: Categories, where: { id: categoriesById }, right: true },
      ],
    });
    if (!categoryById) {
      res.status(404).send("Product not found");
    } else {
      res.send(categoryById);
    }
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
