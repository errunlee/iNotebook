import React , {useContext} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Notecontext from '../context/Notecontext'
function Addnote() {
    const context=useContext(Notecontext)
    const {addNote}=context;
    const [note,setNote]=useState({'title':'','description':'','tag':'default'})
    const handleAdd=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({'title':'','description':'','tag':''})
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <>
     <div className="shadow p-3 mb-3 bg-body rounded">
    <h3> crud your Notes on the Cloud </h3>
  </div>
      <div className="container my-1 ">
       <p className="lead" style={{'fontSize':'1.5rem','fontWeight':'bold'}}>Add a note</p>
      <form>
  <div className="mb-3">
    <label className="form-label">Title</label>
    <input id='title' type="text" className="form-control"  aria-describedby="emailHelp" name='title' value={note.title} onChange={onChange}/>    
  </div>
  <div className="mb-3">
    <label  className="form-label">Description</label>
    <input id='description' type="text" className="form-control"  name='description' value={note.description} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Tag</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='tag'value={note.tag} onChange={onChange}/>
  </div>
  <button disabled={note.title.length<5 || note.description.length<5?true:false} type="submit" className="btn btn-primary" onClick={handleAdd}>Save Note</button>
</form>
</div>
    </>
  )
}

export default Addnote
