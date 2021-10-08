const express = require("express");
const router = express.Router(); //express router
const regController = require("../controllers/register");
const { body, validationResult } = require('express-validator'); //express validation


router.post('/',[
    body('owner_name','Please add owner name').not().isEmpty(),
    body('email','Please include valid email id').isEmail(),
    body('password','Enter a password with 6 or more characters').isLength({
        min:6
    }),
    body('restaurant_name','Please add restaurant name').not().isEmpty(),
    body('city','Please add city').not().isEmpty(),
    body('pincode','Please add pincode').not().isEmpty(),


], regController.reg);

module.exports = router;
