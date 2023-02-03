import React, {useState ,useEffect} from 'react'
import {Link ,useLocation, useNavigate} from "react-router-dom";
export default function Navbar() {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/Login')
  }
  let location=useLocation();
  const [profile,setProfile]=useState('')
    useEffect(()=>{
      let c=0;
      let int=setInterval(()=>{
        setProfile(localStorage.getItem('name'));
        c++;
        if(c===0){
          clearInterval(int)
        }
      },100)
    })
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location==='/about'?'active':''}`} to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
      {!localStorage.getItem('token') && <Link className={`nav-link ${location==='/login'?'active':''} mx-2 btn btn-primary`} to="/login">Login</Link>}
      {!localStorage.getItem('token') && <Link className={`nav-link ${location==='/login'?'active':''} mx-2 btn btn-primary`} to="/signup">Signup</Link>}
      {localStorage.getItem('token') && <p className={`nav-link mx-2 m-0 text-light`}>Hello <span className='badge badge-primary'> {profile}</span></p>}
      {localStorage.getItem('token') &&  <div> <div className="btn-group">
  <button type="button" className="nav-link btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  </button>
  <div className="dropdown-menu " style={{"left":"-45px","minWidth":"0","padding":"0"}}>
  <button onClick={logout} className={`nav-link btn btn-primary`}>Logout</button>
  </div>
</div>
</div> }
    
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
