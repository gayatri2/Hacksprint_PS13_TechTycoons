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
  const { order_id, index } = req.params;
  req.body; //destructuring
  console.log(req.params);
  try {
    let item = await Order.findById(order_id);
    console.log(item);
    if (item) {
      //item already exists in database
      console.log(Object.values(item.order[index])[0][0]);
      const orderArr = item.order;
      Object.values(orderArr[index])[0][0] = 1;
      console.log("wanted", orderArr);
      Object.values(item.order[index])[0][0] = 1;
      await item.save();

      var count = 0;
      orderArr.map((item) => {
        if (Object.values(item)[0][0]) {
          count++;
        }
      });
      if (count === orderArr.length) {
        const filter = { _id: order_id };
        // var val = Object.values(item.order[index])[0][0];
        const update = { order: orderArr, status: 1 };
        let doc = await Order.findOneAndUpdate(filter, update, {
          new: true,
        });
        res.json(doc);
      } else {
        const filter = { _id: order_id };
        // var val = Object.values(item.order[index])[0][0];
        const update = { order: orderArr };
        let doc = await Order.findOneAndUpdate(filter, update, {
          new: true,
        });
        res.json(doc);
      }
      // `doc` is the document _after_ `update` was applied because of
      // `new: true`

      // doc.name; // 'Jean-Luc Picard'
      // doc.age; // 59
    }
  } catch (err) {
    console.error(err.message);
    res.json({
      msg: err.message,
    });
  }
};

module.exports = { order };
