import { useState } from "react";
import Notecontext from "./Notecontext";
const Notestate=({children})=>{
  const host='http://localhost:5000/'
    const noteInitial=[]
      const [notes,setNotes]=useState(noteInitial)

//FEtch all notes;
 const fetchNote=async ()=>{
  const response = await fetch(`${host}api/notes/fetchallnotes`, {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
    'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTE5ODhkMTU5MDVmNzM4NDBkODZkIn0sImlhdCI6MTY3NDEyNDc2Mn0.ZC8jrZCgAfa2iQHBadKqGQCLyfzISwBoU81B2JBiJ5g'
  }
})
const data=await response.json();
setNotes(data)
 }
    //add a note   
    const addNote=async (title,description,tag)=>{
//api call
// eslint-disable-next-line
const response = await fetch(`http://localhost:5000/api/notes/addnote`, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
    'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTE5ODhkMTU5MDVmNzM4NDBkODZkIn0sImlhdCI6MTY3NDEyNDc2Mn0.ZC8jrZCgAfa2iQHBadKqGQCLyfzISwBoU81B2JBiJ5g'
  },
  body: JSON.stringify({title,description,tag}) 
});

      const note= {
        "_id": "63d4dii3e9f4f1809594940b1d4b",
        "user": "63c91988d15905f73840d86d",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-01-28T07:51:05.917Z",
        "__v": 0
      }
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
    'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTE5ODhkMTU5MDVmNzM4NDBkODZkIn0sImlhdCI6MTY3NDEyNDc2Mn0.ZC8jrZCgAfa2iQHBadKqGQCLyfzISwBoU81B2JBiJ5g'
  },
});

      
      //logic
      let newNotes=notes.filter((noteItem)=>{return noteItem._id!==id})
      setNotes(newNotes)
    }
  //edit a note
  const editNote=async (id,title,description,tag)=>{
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjOTE5ODhkMTU5MDVmNzM4NDBkODZkIn0sImlhdCI6MTY3NDEyNDc2Mn0.ZC8jrZCgAfa2iQHBadKqGQCLyfzISwBoU81B2JBiJ5g'
      },
      body: JSON.stringify({title,description,tag}) 
    });
    // eslint-disable-next-line
    const json= response.json(); 
  
    //lohic to edit
    for(let i=0;i<notes.length;i++){
      const elem=notes[i]
      if(elem._id===id){
        elem.title=title
        elem.description=description
        elem.tag=tag;
      }
    }
  }
    return (
        <Notecontext.Provider value={{notes,setNotes,editNote,deleteNote,addNote,fetchNote}}>            
            {children}
        </Notecontext.Provider>
    )
}

export default Notestate;
