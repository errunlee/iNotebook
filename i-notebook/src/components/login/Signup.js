import React from 'react'
 // eslint-disable-next-line
import hand from './hand.png'
export default function Signup() {
  return (
    <div>
      <div className='container login-body'>
    <img className='logo-img' src={hand} alt='...'/>
    <p className='head'>Start creating and storing your notes in the clouds.</p>
    <input className='input' type='text' placeholder='Email or phone number'/><br/>
    <input className='input' type='password' placeholder='Password'/><br/>
    <input className='input' type='number' placeholder='Phone Number'/><br/>
    <button class='sub-btn' type='submit'>Signup</button>
    <div className='signin'>  <input className='blue' type='checkbox'/>Receive Promotional Emails</div>
  </div>
    </div>
  )
}
