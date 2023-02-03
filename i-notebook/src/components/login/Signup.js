import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Spinner'
 // eslint-disable-next-line
import hand from './hand.png'
export default function Signup() {
  
  const [credentials, setCredentials] = useState({ userName: '', email: '',password:'','number':''})
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false)
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handlelInput=()=>{
    document.querySelector('.err-msg-2').style.display='initial'
    document.querySelector('.err-msg-1').style.display='none';

  }
  const handleSubmit = async () => {
    setLoading(true)
    document.querySelector('.err-msg-1').classList.remove('vibrate')
    const {userName,email,password}=credentials
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name:userName,email,password })

    })
    const data = await response.json();
    setLoading(false)
    console.log(data)
    if(data.success){
      navigate('/')      
    }
    else{
      setTimeout(()=>{
        document.querySelector('.err-msg-1').style.display='initial'
        document.querySelector('.err-msg-1').classList.add('vibrate')
      document.querySelector('.err-msg-2').style.display='none'
      },10)
    }


  }

  return (
    <div>
      {loading && <Spinner/>}
      {!loading&&<form onSubmit={(credentials.userName==='' || credentials.email==='' || credentials.password ==='')?handlelInput:handleSubmit} className='container login-body'>
    <img className='logo-img' src={hand} alt='...'/>
    <p className='head'>Start creating and storing your notes in the clouds.</p>
    <p className='err-msg-1'>A user with this email already exists. Please input a valid email.</p>
    <p className='err-msg-2'>All fields are required.</p>
    <input onChange={handleChange} required minLength={5} className='input' id='userName' name='userName' type='text' placeholder='Name'/><br/>
    <input onChange={handleChange} required minLength={5} className='input' id='email' name='email' type='email' placeholder='Email'/><br/>
    <input onChange={handleChange} required minLength={8} className='input' id='passowrd' name='password' type='password' placeholder='Password'/><br/>
    <input onChange={handleChange} className='input' name='number' type='number' placeholder='Phone Number(optional)'/><br/>
    <button className='sub-btn' type='submit'>Signup</button>
    <div className='signin'>  <input className='blue' type='checkbox'/>Receive Promotional Emails</div>
  </form>}
    </div>
  )
}
