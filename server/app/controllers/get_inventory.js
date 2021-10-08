//INVENTORY

const express = require("express");
const router = express.Router(); //express router
const { body, validationResult } = require("express-validator"); //express validation
const Inventory = require("../models/inventory");

//@route       GET /inventory
//@desc        Inventory
//@access      Public

const getInventory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const { restaurant_id } = req.body;
  try {
    const inventoryArr = await Inventory.find({ restaurant_id: restaurant_id });
    if (inventoryArr) {
      res.send(inventoryArr);
    } else {
      res.send({ msg: "No others yet" });
    }
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports = { getInventory };
