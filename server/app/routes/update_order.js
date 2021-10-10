const express = require("express");
const router = express.Router(); //express router
const orderController = require("../controllers/update_order");
const { body, validationResult } = require("express-validator"); //express validation

router.post("/", [], orderController.order);

module.exports = router;
