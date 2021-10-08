//LOGIN RESTAURANT

const express= require('express');
const router=express.Router();      //express router
const { body, validationResult } = require('express-validator'); //express validation
const Owners=require('../models/owners')
const bycrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const config=require('config')
const auth=require('../middleware/auth')    //import middleware





//@route       POST api/auth
//@desc        Login owner and get token
//@access      Public 

const login=async(req,res)=>{
   
     //Validation
     const errors=validationResult(req);
     if(!errors.isEmpty())
     {
         return res.status(400).json({
             errors:errors.array()
         })
     }

     const {email,password}=req.body;   //get the values entered by user
     //console.log(req.body)

     try {
     let owner=await Owners.findOne({email:email});

     if(!owner) //owner not found in DB
     {
        return res.status(400).json({msg:"Invalid credentials."});
    }
    //if owner found in DB, match if password matches
    let isMatch=await bycrypt.compare(password,owner.password);

    //if password doesnt match

    if(!isMatch)
    {
        return res.status(400).json({msg:"Incorrect credentials."});
    }

    //if successful login, generate jwt token
     //Generate JWT Token and send it to client
     const payload={
        owner:{
            id:owner.id
        }
    }
    jwt.sign(payload,config.get('jwtSecret'),{
        expiresIn:3600 //login expires after 3600sec
    },
    (err,token)=>{
        if(err)throw err; 
        res.json({token})
    }
    );
         
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server error")
     }
  


}

module.exports={login};