import React from 'react'
export default function Noteitem({ note }) {
    return (
        <div>
            <div className="mx-2 my-1 card" style={{ "width": "18rem" }}>
                <div className="card-body"><h5 className="card-title ">{note.title}</h5>
                    <hr style={{ 'color': 'black', 'margin-top': '-2px' }}></hr>
                    <p className="card-text">{note.description}</p>
                </div>
                <div>
                        <i className="fa-solid fa-trash m-2"></i>
                        <i className="fa-solid fa-pen-to-square m-2"></i>
                    </div>
                </div>
        </div>
    )
}
