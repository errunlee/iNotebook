import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Nav(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex  flex-column flex-lg-row align-items-start justify-content-between" id="navbarNav">
      <ul className="navbar-nav text-light">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/other-products">Other Products</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <button className={`btn bg-none text-${props.mode==='light'?'dark':'light'}`} onClick={props.handleBluishTheme}>Toggle Bluish Theme</button>
        </li>
        <li className="nav-item">
          <button className={`btn bg-none text-${props.mode==='light'?'dark':'light'}`} onClick={props.handleReddishTheme}>Toggle Reddish Theme</button>
        </li>
        
      </ul>
       <form  className="form-inline my-2">
      <div  className="custom-control custom-switch">
  <input type="checkbox"  className="custom-control-input" onChange={props.toggleMode} id="customSwitch1"/>
  <label  className={`custom-control-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="customSwitch1">Dark mode</label>
</div>
    </form>
    </div>
  </div>
</nav>
    </div>

  )
}
