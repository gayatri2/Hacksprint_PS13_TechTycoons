const express = require("express");
const router = express.Router(); //express router
const inventoryController = require("../controllers/inventory");
const { body, validationResult } = require("express-validator"); //express validation

router.post(
  "/",
  [
    // body("restaurant_id", "Please add item name").not().isEmpty(),
    body("product_name", "Please add item name").not().isEmpty(),
    body("product_quantity", "Please add item cost").not().isEmpty(),
  ],
  inventoryController.inventory
);

module.exports = router;
