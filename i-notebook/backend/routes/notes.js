const express = require('express')
const router = express.Router();
const fetcuser = require('../middleware/fetcuser')
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator')

//fetch notes from db
router.get('/fetchallnotes', fetcuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id })
    res.json(notes);
})


//add new note to db
router.post('/addnote', fetcuser, [
    body('title', 'valid title please').isLength({ min: 3 }),
    body('description', 'at least 5 chars').isLength({ min: 3 }),
], async (req, res) => {
    const { title, description, tag } = req.body
    const errors = validationResult(req);
    //check for err
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const note = new Notes({
        title, description, tag, user: req.user.id
    })
    const savedNote = await note.save();
    res.json(savedNote)
})

//new route : update
router.put('/updatenote/:id', fetcuser, async (req, res) => {
    const { title, description, tag } = req.body
    //create new Note obj
    const newNote = {}
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }
    //find note to be updated
    let note = await Notes.findById(req.params.id)
    if (!note) { return res.status(400).send("not found") }
    if (note.user.toString() !== req.user.id) { return res.status(401).send("Permission Denied") }

    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json(note)
})

//Delete note
router.delete('/deletenote/:id', fetcuser, async (req, res) => {
    const { title } = req.body
    //find note to be updated
    let note = await Notes.findById(req.params.id)
    if (!note) { return res.status(400).send("not found") }
   //allow only if note is of login user
    if (note.user.toString() !== req.user.id) { return res.status(401).send("Permission Denied") }
    note=await Notes.findByIdAndDelete(req.params.id)
    res.json("note deletion success")
})


module.exports = router
