//Order

const express = require("express");
const router = express.Router(); //express router
const { body, validationResult } = require("express-validator"); //express validation
const Order = require("../models/orders");

//@route       POST /order
//@desc        Order
//@access      Public

const order = async (req, res) => {
  //Add orders
  const { order_id } = req.params;
  req.body; //destructuring
  console.log(req.params);
  try {
    let item = await Order.findById(order_id);
    console.log(item);
    if (item) {
      Order.remove({ _id: order_id }, function (err) {
        res.send("deleted");
        if (err) {
          message.type = "error";
        }
      });
    }
  } catch (err) {
    console.error(err.message);
    res.json({
      msg: err.message,
    });
  }
};

module.exports = { order };
