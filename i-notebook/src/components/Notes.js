import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Notecontext from '../context/Notecontext'
import Addnote from './Addnote';
import Noteitem from './Noteitem';
export default function Notes() {    
  const allnote=useContext(Notecontext)
  // eslint-disable-next-line
 const {notes,fetchNote,editNote}=allnote;
 const [note,setNote]=useState({'id':'','etitle':'','edescription':'','etag':''})
 let navigate=useNavigate();

 useEffect(()=>{
  if(localStorage.getItem('token')){
    fetchNote();
  }
  else{
    navigate('/login')
  }
 },[])
 const ref=useRef(null)
 const closeref=useRef(null)
 const updateNote=(currentNote)=>{
   ref.current.click();
   setNote({'id':currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
 }
 const handleAdd=(e)=>{
  e.preventDefault();
  closeref.current.click();
  editNote(note.id,note.etitle,note.edescription,note.etag);
}

const onChange=(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
}
  return (
    <>
    <Addnote/>
    
<button ref={ref} type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Update Note</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="mb-3">
    <label className="form-label">Title</label>
    <input type="text" value={note.etitle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='etitle' onChange={onChange}/>    
  </div>
  <div className="mb-3">
    <label  className="form-label">Description</label>
    <input value={note.edescription} type="text" className="form-control" id="exampleInputPassword1" name='edescription' onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Tag</label>
    <input value={note.etag} type="text" className="form-control" id="exampleInputPassword1" name='etag' onChange={onChange}/>
  </div>
      </div>
      <div className="modal-footer">
        <button ref={closeref} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>Save changes</button>
      </div>
    </div>
  </div>
</div>

      <div className="notes my-3">
<h3>Your Notes</h3>
<div className='d-flex flex-wrap'>
  {notes.length===0 && 'Not notes to display.'}
{notes.length!==0 && notes.map((note)=>{return  <Noteitem updateNote={updateNote} key={note._id} note={note}/>})}
</div>
</div>
    </>
  )
}
