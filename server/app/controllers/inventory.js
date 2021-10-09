//INVENTORY

const express = require("express");
const router = express.Router(); //express router
const { body, validationResult } = require("express-validator"); //express validation
const Inventory = require("../models/inventory");

//@route       POST /inventory
//@desc        Inventory
//@access      Public

const inventory = async (req, res) => {
  //Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  // res.send("Passed")  //if passed all validations with no errors, this message shown

  //Add inventory items
  const { restaurant_id, product_name, product_quantity } = req.body; //destructuring
  try {
    let item = await Inventory.findOne({ product_name: product_name });
    // console.log(item)
    if (item) {
      //item already exists in database
      item["product_quantity"] = product_quantity;
      item.save();
      res.json({ msg: "Item updated in DB." });
    } else {
      item = new Inventory({
        restaurant_id: 1,
        product_name: product_name,
        product_quantity: product_quantity,
      });

      // //save to DB
      item.save();

      res.json({ msg: "Item saved to DB." });
    }
  } catch (err) {
    console.error(err.message);
    res.json({
      msg: err.message,
    });
  }
};

module.exports = { inventory };
