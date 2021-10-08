const express = require("express");
const router = express.Router(); //express router
const orderController = require("../controllers/order");
const { body, validationResult } = require("express-validator"); //express validation

router.post(
  "/",
  [
    // body("restaurant_id", "Please add item name").not().isEmpty(),
    body("order", "Please add order").not().isEmpty(),
    body("total_cost", "Please add total cost").not().isEmpty(),
    body("source", "Please add source").not().isEmpty(),
    body("status", "Please add status").not().isEmpty(),
    body("delivery_boy", "Please add delivery_boy").not().isEmpty(),
  ],
  orderController.order
);

module.exports = router;
