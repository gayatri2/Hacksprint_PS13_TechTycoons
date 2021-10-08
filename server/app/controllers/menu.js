//MENU

const express= require('express');
const router=express.Router();      //express router
const { body, validationResult } = require('express-validator'); //express validation
const Menu=require('../models/menu')

//@route       POST /menu
//@desc        Menu
//@access      Public 


const menu=async(req,res)=>{
   
    

    //Validation
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({
            errors:errors.array()
        })
    }
        // res.send("Passed")  //if passed all validations with no errors, this message shown
    
    //Add menu items
    const {item_name, item_cost}=req.body; //destructuring
    console.log(item_name, item_cost)
    try {
         let item=await Menu.findOne({item_name:item_name});
        // console.log(item)
        if(item)    //item already exists in database
        {
            return res.status(400).json({msg:"Item already exists."});
        }
        item=new Menu({
            item_name:item_name,
            item_cost:item_cost,
        })
           

      

        // //save to DB
        item.save();     
        
        res.json({msg:"Item saved to DB."})

    } 
    catch (err) {
        console.error(err.message);
        res.json({
            msg: err.message
        })
    }


}

module.exports={menu};