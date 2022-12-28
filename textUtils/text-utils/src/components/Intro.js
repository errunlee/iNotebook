import React from 'react'

export default function Intro(props) {
  return (
    <div>
      <div className='lead'><p className='text-center'><strong>{props.description}</strong></p></div>
    </div>
  )
}
