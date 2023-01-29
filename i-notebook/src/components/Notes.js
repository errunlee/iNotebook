import React, { useEffect } from 'react'
import { useContext } from 'react'
import Notecontext from '../context/Notecontext'
import Addnote from './Addnote';
import Noteitem from './Noteitem';
export default function Notes() {    
  const allnote=useContext(Notecontext)
  // eslint-disable-next-line
 const {notes,fetchNote}=allnote;
 useEffect(()=>{
  fetchNote();
 },[])
  return (
    <>
    <Addnote/>
      <div className="notes my-3">
<h3>Your Notes</h3>
<div className='d-flex flex-wrap'>
{notes.map((note)=>{return  <Noteitem key={note._id} note={note}/>})}
</div>
</div>
    </>
  )
}
