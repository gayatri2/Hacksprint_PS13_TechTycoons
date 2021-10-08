const express = require("express");
const app = express();
const connectDB = require("./config/db");

//Connect DB
connectDB();

//Init Middleware for body parsing
app.use(express.json({ extended: false }));

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

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
