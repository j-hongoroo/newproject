const userSchema = require("../modal/user");
const jwt = require('jsonwebtoken');

exports.protect =(req,res,next)=>{
    console.log(req.cookies)
    let token = null;
    
    if(!req.cookies){
        return res.status(400).json({
            success:false,
            error:"ta nevtern vv"
        })
    }
    token = req.cookies["token"];
    const user = jwt.verify(token,process.env.JWT_SECRET);
    req.createUserId = user.id

next()
}
