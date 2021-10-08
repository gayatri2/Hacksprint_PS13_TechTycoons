const jwt=require('jsonwebtoken')
const config=require('config')

module.exports=function(req,res,next){
    //get token from header

    const token=req.header('x-auth-token');

    //check if token is there or not

    if(!token)
    {
        return res.status(401).json({msg:"No token, authorization denied."})
    }

    //if token is there
    try {
    

        const decoded=jwt.verify(token,config.get('jwtSecret'));

        //pull out payload and set the owner in that to req.owner so we will have access to it in the protected route
       

        req.owner=decoded.owner;

        next();

    } catch (err) { //doesnt verify token
        res.status(401).json({msg:"Token not valid"})
    }
}