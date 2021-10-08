const express = require("express");
const router = express.Router(); //express router
const menuController = require("../controllers/menu");
const { body, validationResult } = require('express-validator'); //express validation




router.post("/",[
    body('item_name','Please add item name').not().isEmpty(),
    body('item_cost','Please add item cost').not().isEmpty()


],menuController.menu);

module.exports = router;
