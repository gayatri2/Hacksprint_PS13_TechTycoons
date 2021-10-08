const express = require("express");
const router = express.Router(); //express router
const orderController = require("../controllers/get_orders");
const { body, validationResult } = require("express-validator"); //express validation

router.get(
  "/",
  // body("restaurant_id", "Please add item name").not().isEmpty(),
  orderController.getOrder
);

module.exports = router;
