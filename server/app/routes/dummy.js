const express = require("express");
const router = express.Router(); //express router
const loginController = require("../controllers/login");
const { body, validationResult } = require('express-validator'); //express validation
const auth = require("../middleware/auth"); //auth




router.post("/",auth,async (req, res) =>{
    res.send("hi");
});

module.exports = router;
