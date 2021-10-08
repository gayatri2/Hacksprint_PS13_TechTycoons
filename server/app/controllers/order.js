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
  const { restaurant_id, order, total_cost, source, status, delivery_boy } =
    req.body; //destructuring
  console.log(restaurant_id, order, total_cost, source, status, delivery_boy);
  try {
    let item = await Order.findOne({
      restaurant_id: restaurant_id,
      order: order,
      source: source,
    });
    // console.log(item)
    if (item) {
      //item already exists in database
      return res.status(400).json({ msg: "Order already exists." });
    }
    item = new Order({
      restaurant_id: restaurant_id,
      order: order,
      total_cost: total_cost,
      source: source,
      status: status,
      delivery_boy: delivery_boy,
    });

    // //save to DB
    item.save();

    res.json({ msg: "Item saved to DB." });
  } catch (err) {
    console.error(err.message);
    res.json({
      msg: err.message,
    });
  }
};

module.exports = { order };
