const express=require('express')
const User=require('../models/User')
const router=express.Router();
const {body,validationResult}=require('express-validator')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
const JWT_SECRET='arunbruh'
const fetcuser=require('../middleware/fetcuser')
router.post('/createuser',[
    body('email').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password').isLength({ min: 5 })
],async (req,res)=>{
    const errors = validationResult(req);
    //check for err
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }    
    //create email duplication
    let user=await User.findOne({email:req.body.email})
    if(user){
      return res.status(400).json({msg:"sory email already exists"})
    }
    var salt = bcrypt.genSaltSync(10);
    let secPass=await bcrypt.hash(req.body.password,salt)
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email:req.body.email,
      })
      const data={
        user:{
          id:user.id
        }
      }
      const authToken=jwt.sign(data,JWT_SECRET)
      res.json({authToken})
})


//authenticating
router.post('/login',[
  body('email','invalid email').isEmail(),
  body('password','invalid password').exists()
],async (req,res)=>{
  const errors = validationResult(req);
  //check for err
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } 
  const {email,password}=req.body;
  try{
    let user=await User.findOne({email})
    if(!user){
      return res.status(400).json({err:"please enter valid email and/or password"})
    }
    const passwordCompate=await bcrypt.compare(password,user.password)
    if(!passwordCompate){
      return res.status(400).json({err:"please enter valid email and/or password"})
    }
    const data={
      user:{
        id:user.id
      }
    }
    const authToken=jwt.sign(data,JWT_SECRET)
    res.json({authToken})
  }
  catch{
    res.status(400).json({err:"some internal err occured"})
  }
})

//route 3

router.post('/getuser',fetcuser,async (req,res)=>{
  try{
    userId=req.user.id
    const user=await User.findById(userId).select('-password')
    res.send(user)
  }
  catch{
    res.status(400).json({err:"some internal err occured"})
  }
})
module.exports=router

