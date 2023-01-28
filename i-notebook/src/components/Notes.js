import React from 'react'
import { useContext } from 'react'
import Notecontext from '../context/Notecontext'
import Noteitem from './Noteitem';
export default function Notes() {    
  const allnote=useContext(Notecontext)
  // eslint-disable-next-line
 const {notes,setNotes}=allnote;
  return (
    <>
      <div className="notes my-3">
<h3>Your Notes</h3>
<div className='d-flex flex-wrap'>
{notes.map((note)=>{return <Noteitem note={note}/>})}
</div>
</div>
    </>
  )
}
