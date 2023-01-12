import React from 'react'

export default function Intro(props) {
  const lightText={
    color:'white'
  }
  const darkText={
    color:'black'
  }
  return (
    <div>
      <div className='lead'><p className='text-center' style={props.mode==='light'?darkText:lightText}><strong>{props.description}</strong></p></div>
    </div>
  )
}
