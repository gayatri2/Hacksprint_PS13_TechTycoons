const express = require("express");
const router = express.Router(); //express router
const menuController = require("../controllers/get_menu");
const { body, validationResult } = require("express-validator"); //express validation

router.get("/", menuController.getMenu);

module.exports = router;
