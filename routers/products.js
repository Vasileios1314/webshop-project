const { Router } = require("express");
const Products = require("../models").product;
const Categories = require("../models").category;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const products = await Products.findAll({ include: Categories });
    res.send(products);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productById = req.params.id;
    const findProductById = await Products.findByPk(productById, {
      include: Categories,
    });
    if (!findProductById) {
      res.status(404).send("Product not found");
    } else {
      res.send(findProductById);
    }
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
