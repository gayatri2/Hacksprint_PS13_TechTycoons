const express = require("express");
const router = express.Router(); //express router
const orderController = require("../controllers/delete_order");
const { body, validationResult } = require("express-validator"); //express validation

router.post("/:order_id", orderController.order);

module.exports = router;
