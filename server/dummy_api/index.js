const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const createOrder = () => {
  items = [
    "Plain Sandwich",
    "Grilled Sandwich",
    "Club Sandwich",
    "Tandoori Paneer Tikka",
    "Malai Paneer Tikka",
    "Dahi ke Kabab",
    "Shahi Paneer",
    "Kadhai Paneer",
    "Paneer Butter Masala",
    "Dal Makhani",
    "Tandoori Roti",
    "Butter Roti",
    "Plain Naan",
    "Steam Rice",
    "Veg. Pulao",
    "Matka Biryani With Raita",
    "Hyderabadi Biryani ",
    "Gulab Jamun",
    "Diet Pepsi",
  ];
  boys = [
    "Ekansh",
    "Hredhaan",
    "Jairaj",
    "Onkar",
    "Reyansh",
    "Samesh",
    "Viraj",
    "Yash",
  ];
  var res = [];
  var len = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  for (let i = 0; i < Number(len); i++) {
    obj = {};
    var index = Math.floor(Math.random() * (18 - 0 + 1) + 0);
    obj[items[Number(index)]] = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    res.push(obj);
  }
  obj1 = {};
  obj1["DeliveryBoy"] = boys[Math.floor(Math.random() * (8 - 0 + 1) + 0)];
  res.push(obj1);
  return res;
};

app.get("/zomato", (req, res) => {
  var arr = createOrder();
  res.send(arr);
});

app.get("/swiggy", (req, res) => {
  var arr = createOrder();
  res.send(arr);
});

app.get("/foodpanda", (req, res) => {
  var arr = createOrder();
  res.send(arr);
});
app.get("/dunzo", (req, res) => {
  var arr = createOrder();
  res.send(arr);
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Port 3000 up and running!");
});
