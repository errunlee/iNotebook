import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/Notecontext'
export default function About() {
  const a=useContext(noteContext)
  useEffect(()=>{
    a.update();
  },[])
  return (
    <div>
   <h1>this is about {a.state.name} </h1>
    </div>
  )
}
