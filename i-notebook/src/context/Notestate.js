import { useState } from "react";
import Notecontext from "./Notecontext";
const Notestate=({children})=>{
    const noteInitial=[
        {
          "_id": "63d4d3cff4f18059440b1d49",
          "user": "63c91988d15905f73840d86d",
          "title": "Go market",
          "description": "Bring brinjal and other vegetbles.",
          "tag": "ktichen need",
          "date": "2023-01-28T07:50:39.786Z",
          "__v": 0
        },
        {
          "_id": "63d4d3e9f4f18059440b1d4b",
          "user": "63c91988d15905f73840d86d",
          "title": "Watch Movie",
          "description": "Pathaan and Ek tha tiger 9",
          "tag": "entertainment",
          "date": "2023-01-28T07:51:05.917Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(noteInitial)
    return (
        <Notecontext.Provider value={{notes,setNotes}}>            
            {children}
        </Notecontext.Provider>
    )
}

export default Notestate;
