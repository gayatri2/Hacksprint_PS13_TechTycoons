const express = require("express");
const router = express.Router(); //express router
const inventoryController = require("../controllers/get_inventory");
const { body, validationResult } = require("express-validator"); //express validation

router.get(
  "/",
  // body("restaurant_id", "Please add item name").not().isEmpty(),
  inventoryController.getInventory
);

module.exports = router;
