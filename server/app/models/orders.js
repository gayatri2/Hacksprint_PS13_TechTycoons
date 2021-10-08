const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    restaurant_id: {
      type: String,
      required: true,
    },
    order: {
      type: Array,
      required: true,
    },

    total_cost: {
      type: Number,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    delivery_boy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("order", OrderSchema);
