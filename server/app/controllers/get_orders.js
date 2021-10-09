//ORDERS

const express = require("express");
const router = express.Router(); //express router
const { body, validationResult } = require("express-validator"); //express validation
const Order = require("../models/orders");

//@route       GET /order
//@desc        Order
//@access      Public

const getOrder = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  // const { restaurant_id } = req.body;
  try {
    const orderArr = await Order.find();
    if (orderArr) {
      console.log(orderArr);
      res.send(orderArr);
    } else {
      res.send({ msg: "No others yet" });
    }
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports = { getOrder };
