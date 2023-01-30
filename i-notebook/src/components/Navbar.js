import React from 'react'
import {Link ,useLocation} from "react-router-dom";
export default function Navbar() {
  let location=useLocation();
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
        <li className="nav-item">
          <Link className={`nav-link ${location==='/login'?'active':''}`} to="/login">Login</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
      <Link className={`nav-link ${location==='/login'?'active':''} mx-2 btn btn-primary`} to="/login">Login</Link>
      <Link className={`nav-link ${location==='/login'?'active':''} mx-2 btn btn-primary`} to="/signup">Signup</Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
