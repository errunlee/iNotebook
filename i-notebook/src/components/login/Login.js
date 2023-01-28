import React from 'react'
 // eslint-disable-next-line
import style from './style.css'
import hand from './hand.png'
export default function Login() {
  return (
    <div>
      <div className='container login-body'>
    <img className='logo-img' src={hand} alt='...'/>
    <p className='head'>Accessing your notes on the web is just one step away.</p>
    <input className='input' type='text' placeholder='Email or phone number'/><br/>
    <input className='input' type='password' placeholder='Password'/><br/>
    <button class='sub-btn' type='submit'>Login</button>
    <div className='signin'>  <input className='blue' type='checkbox'/>Keep me signed in</div>
    <div className='span'>
    <span class='sp'>Don't have an account?</span>
    <span class='sp'>Forgot Password</span>
    </div>
  </div>
    </div>
  )
}
