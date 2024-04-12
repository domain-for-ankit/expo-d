import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
function Header() {
  return (
    <>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Blogging</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
  
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
  
        <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
        </li>
        <li className="nav-item">
  
  <NavLink to="/about" className="nav-link">About</NavLink>
  </li>
        <li className="nav-item">
  
   {/* <NavLink to="/contact-us" className="nav-link">Blogs</NavLink> */}
  </li>

      </ul>
     
    </div>
  </div>
</nav>
    </header>
    <Outlet />
    </>
  )
}

export default Header