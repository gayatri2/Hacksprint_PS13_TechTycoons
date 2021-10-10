const express = require("express");
const app = express();
const connectDB = require("./config/db");
const axios = require("axios");
const Menu = require("./models/menu");
const cors = require("cors");
//Connect DB
connectDB();

const getOrders = async (arg) => {
  const result = await axios(
    "https://rest-aggregators-dummy.herokuapp.com/" + arg
  );
  console.log(result.data);
  var restaurant_id = 1;
  var totalCost = 0;
  order_arr = [];
  arr = result.data;
  var i = 0;
  arr.map((item) => {
    if (Object.keys(item)[0] !== "DeliveryBoy") {
      obj = {};
      arr_val = [];
      arr_val.push(0);
      arr_val.push(Object.values(item)[0]);
      obj[Object.keys(item)[0]] = arr_val;
      order_arr.push(obj);

      console.log(arr.length);
      Menu.findOne({ item_name: Object.keys(item)[0] }).then((result) => {
        console.log(result);
        console.log(result.item_cost);
        totalCost =
          Number(totalCost) +
          Number(result.item_cost) * Number(Object.values(item)[0]);
        i = Number(i) + 1;
        console.log("i", i);
        if (i === arr.length - 1) {
          var delBoy = Object.values(arr[arr.length - 1])[0];
          var status = 0;
          var source = arg;
          req_obj = {};
          req_obj["restaurant_id"] = restaurant_id;
          req_obj["order"] = order_arr;
          req_obj["total_cost"] = totalCost;
          req_obj["source"] = source;
          req_obj["status"] = status;
          req_obj["delivery_boy"] = delBoy;
          console.log(req_obj);
          axios({
            method: "post",
            url: "http://localhost:5000/order",
            data: req_obj,
          }).then(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );
        }
      });
    }
  });
};
//Init Middleware for body parsing
app.use(express.json({ extended: false }));
app.use(cors());
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to API.." }); //send response to client after client makes a get request "/" through localhost5000 //send in json format ie. object
});

//define routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/dummy", require("./routes/dummy"));
app.use("/menu", require("./routes/menu"));
app.use("/order", require("./routes/order"));
app.use("/getmenu", require("./routes/get_menu"));
app.use("/getorder", require("./routes/get_order"));
app.use("/inventory", require("./routes/inventory"));
app.use("/getinventory", require("./routes/get_inventory"));
app.use("/updateorder/:order_id/:index", require("./routes/update_order"));
// getOrders("zomato");
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
