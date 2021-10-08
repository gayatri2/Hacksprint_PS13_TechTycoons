const express = require("express");
const router = express.Router(); //express router
const loginController = require("../controllers/login");
const { body, validationResult } = require('express-validator'); //express validation



router.post("/",[
    body('email','Please include valid email id').isEmail(),
    body('password','Password is required').exists()
   
], loginController.login);

module.exports = router;
