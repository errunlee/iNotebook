const express=require('express')
const router=express.Router();
const fetcuser=require('../middleware/fetcuser')
const Notes=require('../models/Notes')
const {body,validationResult}=require('express-validator')

//fetch notes from db
    router.get('/fetchallnotes',fetcuser,async (req,res)=>{
    const notes=await Notes.find({user:req.user.id})
    res.json(notes);
})


//add new note to db
    router.post('/addnote',fetcuser,[
        body('title','valid title please').isLength({min:3}),
        body('description','at least 5 chars').isLength({ min: 3 }),
    ],async (req,res)=>{
        const {title,description,tag}=req.body
        const errors = validationResult(req);
        //check for err
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }   
        const note=new Notes({
            title,description,tag,user:req.user.id
        })
        const savedNote=await note.save();
        res.json(savedNote)
})


module.exports=router
