const mongoose=require('mongoose');

const OwnersSchema=mongoose.Schema({
    owner_name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,

    },
//    date:{
//         type:Date,
//         default:Date.now

//     },
    restaurant_name:{
        type: String,
        required:true,
    },
    city:{
        type: String,
        required:true,
    },
    pincode:{
        type: String,
        required:true,
    },

})
module.exports=mongoose.model('owners',OwnersSchema);