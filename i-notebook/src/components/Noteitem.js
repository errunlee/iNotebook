import React, { useContext } from 'react'
import Notecontext from '../context/Notecontext'
export default function Noteitem({ note }) {
    const context = useContext(Notecontext)
    const { deleteNote } = context;
    return (
        <div>
            <div className="mx-2 my-1 card" style={{ "width": "18rem" }}>
                <div className="card-body"><h5 className="card-title ">{note.title}</h5>
                    <hr style={{ 'color': 'black', 'marginTop': '-2px' }}></hr>
                    <p className="card-text">{note.description}</p>
                </div>
                <div>
                    <i title='Delete Note' onClick={()=>{deleteNote(note._id)}} className="fa-solid fa-trash m-2"></i>
                    <i title='Edit Note' className="fa-solid fa-pen-to-square m-2"></i>
                </div>
            </div>
        </div>
    )
}
