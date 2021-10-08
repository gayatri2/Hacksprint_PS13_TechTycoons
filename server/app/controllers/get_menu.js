//MENU

const express = require("express");
const router = express.Router(); //express router
const { body, validationResult } = require("express-validator"); //express validation
const Menu = require("../models/menu");

//@route       GET /menu
//@desc        Menu
//@access      Public

const getMenu = async (req, res) => {
  const menuArr = await Menu.find();
  if (menuArr) {
    res.send(menuArr);
  } else {
    return res.status(400).json({ msg: "Menu is empty" });
  }
};

module.exports = { getMenu };
