//REGISTER RESTAURANT

const express= require('express');
const router=express.Router();      //express router
const { body, validationResult } = require('express-validator'); //express validation
const Owners=require('../models/owners')
const bycrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const config=require('config')

//@route       POST /register
//@desc        Register a restaurant
//@access      Public 


const reg=async(req,res)=>{
   
    

    //Validation
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({
            errors:errors.array()
        })
    }
        // res.send("Passed")  //if passed all validations with no errors, this message shown
    
    //Register owner 
    const {owner_name, email, password,restaurant_name,city,pincode}=req.body; //destructuring
    try {
        let owner=await Owners.findOne({email:email});
        if(owner)    //owner already exists in database
        {
            return res.status(400).json({msg:"Email already exists."});
        }
        owner=new Owners({
            owner_name:owner_name,
            email:email,
            password:password,
            restaurant_name:restaurant_name,
            city:city,
            pincode:pincode,
        })
           

        //encryption using bycrypt
        const salt=await bycrypt.genSalt(10);
        owner.password=await bycrypt.hash(password,salt);

        //save to DB
        owner.save();
        
        // res.send("User saved to DB.")
        
        //Generate JWT Token and send it to client
        const payload={
            owner:{
                id:owner.id,
            }
        }
        jwt.sign(payload,config.get('jwtSecret'),{
            expiresIn:3600
        },
        (err,token)=>{
            if(err)throw err; 
            res.json({token})
        }
    );
        
    } 
    catch (err) {
        console.error(err.message);
        res.json({
            msg: err.message
        })
    }


}

module.exports={reg};