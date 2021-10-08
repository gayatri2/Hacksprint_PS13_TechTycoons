const mongoose = require("mongoose");

const InventorySchema = mongoose.Schema(
  {
    restaurant_id: {
      type: String,
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    product_quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("inventory", InventorySchema);
