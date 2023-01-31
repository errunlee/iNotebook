import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line
import style from './style.css'
import hand from './hand.png'
export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const navigate=useNavigate();
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async () => {
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    })
    const data = await response.json();
    if(data.success){
      navigate('/')
      localStorage.setItem('token',data.authtoken)
      document.querySelector('.err-msg').style.display='none';
    }
    else{
      document.querySelector('.err-msg').style.display='initial';
    }

  }
  return (
    <div>
      <div className='container login-body'>
        <img className='logo-img' src={hand} alt='...' />
        <p className='head'>Accessing your notes on the web is just one step away.</p>
        <p className='err-msg'>Plese enter correct credentials.</p>
        <input onChange={handleChange} className='input' name='email' type='text' placeholder='Email or phone number' /><br />
        <input onChange={handleChange} className='input' name='password' type='password' placeholder='Password' /><br />
        <button className='sub-btn' type='submit' onClick={handleSubmit}>Login</button>
        <div className='signin'>  <input className='blue' type='checkbox' />Keep me signed in</div>
        <div className='span'>
          <span className='sp'>Don't have an account?</span>
          <span className='sp'>Forgot Password</span>
        </div>
      </div>
    </div>
  )
}
