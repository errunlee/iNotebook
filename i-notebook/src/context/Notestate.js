import { useState } from "react";
import Notecontext from "./Notecontext";
const Notestate=({children})=>{
  const host='https://backed-production.up.railway.app/'
    const noteInitial=[]
      const [notes,setNotes]=useState(noteInitial)

//FEtch all notes;
 const fetchNote=async ()=>{
  const response = await fetch(`${host}api/notes/fetchallnotes`, {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
    'auth-token':localStorage.getItem('token')
  }
})
const data=await response.json();
setNotes(data)
 }
    //add a note   
    const addNote=async (title,description,tag)=>{
//api call
// eslint-disable-next-line
const response = await fetch(`https://backed-production.up.railway.app/api/notes/addnote`, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
    'auth-token':localStorage.getItem('token')
  },
  body: JSON.stringify({title,description,tag}) 
});

      const note=await  response.json();
      setNotes(notes.concat(note));
    }
  //delete a note
    const deleteNote=async (id)=>{
 //api call
 // eslint-disable-next-line
 const response = await fetch(`${host}api/notes/deletenote/${id}`, {
  method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
    'auth-token':localStorage.getItem('token')
  },
});      
      //logic
      let newNotes=notes.filter((noteItem)=>{return noteItem._id!==id})
      setNotes(newNotes)
    }
  //edit a note
  const editNote=async (id,title,description,tag)=>{
    //api call
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}) 
    });
    // eslint-disable-next-line
    const note= response.json(); 
    setNotes(notes.concat(note))
    //lohic to edit
    const newNote=JSON.parse(JSON.stringify(notes))
    for(let i=0;i<newNote.length;i++){
      const elem=newNote[i]
      if(elem._id===id){
        newNote[i].title=title
        newNote[i].description=description
        newNote[i].tag=tag;
      break;
      }
    }
  setNotes(newNote)

  }
    return (
        <Notecontext.Provider value={{notes,setNotes,editNote,deleteNote,addNote,fetchNote}}>            
            {children}
        </Notecontext.Provider>
    )
}

export default Notestate;
