//Order

const express = require("express");
const router = express.Router(); //express router
const { body, validationResult } = require("express-validator"); //express validation
const Order = require("../models/orders");

//@route       POST /order
//@desc        Order
//@access      Public

const order = async (req, res) => {
  //Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  // res.send("Passed")  //if passed all validations with no errors, this message shown

  //Add orders
  const { order_id, index } = req.params;
  req.body; //destructuring
  console.log(req.params);
  try {
    let item = await Order.findById(order_id);
    // console.log(item)
    if (item) {
      //item already exists in database
      Object.values(item.order[index])[0] = 1;
      item.save();
      res.json(item);
    }
  } catch (err) {
    console.error(err.message);
    res.json({
      msg: err.message,
    });
  }
};

module.exports = { order };
